import { world, system, Vector } from '@minecraft/server'
import { server } from 'BPM/.js'

class Player {
    constructor(name,coords) {
        // This
        this.username = name;
        this.player = server.spawnSimulatedPlayer(new Vector(0,4,0), this.username);
        // Teleport
        this.player.teleport(coords,{ dimension: world.getDimension('overworld') });
        const { x, y, z } = coords;
        this.player.runCommand(`spawnpoint @s ${x} ${y} ${z}`);
    }
    // Actions
    disconnect = () => this.player.disconnect();
    kill = () => this.player.kill();
    respawn = () => this.player.respawn();
    jump = () => this.player.jump();
    attack = () => this.player.attack();
    use = (slot = this.player.selectedSlot()) => this.player.useItemInSlot(slot);
    interact = () => this.player.interact();
    swim = () => this.player.swim();
    glide = () => this.player.glide();
    fly = () => this.player.fly();
    shift = () => this.player.isSneaking ? this.player.isSneaking = false : this.player.isSneaking = true;
    rotate = (degrees = 20) => this.player.rotateBody(degrees);
    wait = (gt = 20) => new Promise(res => system.runTimeout(res,Number(gt)));
    select = (slot = 0) => this.player.selectedSlot = slot;
    trident = async () => {
        this.player.useItemInSlot(this.player.selectedSlot);
        await sleep(15);
        this.stop();
    }
    drop = (slot = this.player.selectedSlot) => {
        this.select(slot);
        this.player.dropSelectedItem();
    }
    stop = () => {
        this.player.stopBreakingBlock();
        this.player.stopFlying();
        this.player.stopGliding();
        this.player.stopInteracting();
        this.player.stopMoving();
        this.player.stopSwimming();
        this.player.stopUsingItem();
    }
    // Manager
    _group = async txt => {
        let m = txt.split('&');
        for (let i=0; i<m.length; i++) await this[m[i]]();
    }
    script = async (script,log = false) => {
        let acts = script.split('->').map(_ => _.trim());
        for (let i=0; i<acts.length; i++) {
            let act = acts[i];
            if (act.includes('script')) continue;
            await this.wait(10);
            if (act.includes('::')) await this[act.split('::')[0]](act.split('::')[1]);
            else if (act.includes('*')) {
                let m = act.split('*').map(_ => _.trim());
                for (let j=0; j<Number(m[1]); j++) {
                    await this.wait(10);
                    if (m[0].startsWith('[]')) this._group(m[0].replace('[]',''));
                    else this[m[0]]();
                }
            }
            else {
                if (act.startsWith('[]')) this._group(act.replace('[]',''));
                else this[act]();
            }
        }
        if (log) world.sendMessage('§bScript: §r' + script);
    }
}; export { Player }
