import { world, system } from '@minecraft/server'
import { slime } from './assets/slime.js'
import { Player } from './assets/player.js'
import { NBT } from './assets/dynamic.js'

// Events
const Event = {
    // Events
    after: {
        events: world.afterEvents, 
        on: (list, call) => Event.after.events[list].subscribe(ev => call(ev))
    },
    before: {
        events: world.beforeEvents, 
        on: (list, call) => Event.before.events[list].subscribe(ev => call(ev))
    },
    // Follow Events
    namespaces: {},
    follow: (event,call) => {
        if (event.includes('/')) {
            let x = event.split('/');
            Event[x[0]].on(x[1],call)
        } else if (event.includes('::')) {
            let x = event.split('::');
            Event.namespaces[x[0]].on(x[1],call);
        }
    }
}

Event.namespaces['spawn'] = {
    on: (name,call) => Event.follow('after/entitySpawn', ev => {
        let id = ev.entity.typeId.replace('minecraft:','');
        if (name.includes('&')) {
            let inputs = name.split('&');
            if (inputs.includes(id)) call(ev)
        } else if (id == name) call(ev);
    })
}
Event.namespaces['die'] = {
    on: (name,call) => Event.follow('after/entityDie', ev => {
        let id = ev.deadEntity.typeId.replace('minecraft:','');
        if (name.includes('&')) {
            let inputs = name.split('&');
            if (inputs.includes(id)) call(ev)
        } else if (id == name) call(ev);
    })
}
Event.namespaces['place'] = {
    on: (name,call) => Event.follow('after/blockPlace', ev => {
        let id = ev.block.typeId.replace('minecraft:','');
        if (name.includes('&')) {
            let inputs = name.split('&');
            if (inputs.includes(id)) call(ev)
        } else if (id == name) call(ev);
    })
}
Event.namespaces['break'] = {
    on: (name,call) => Event.follow('after/blockBreak', ev => {
        let id = ev.brokenBlockPermutation.type.id.replace('minecraft:','');
        if (name.includes('&')) {
            let inputs = name.split('&');
            if (inputs.includes(id)) {
                ev.id = id;
                call(ev);
            }
        } else if (id == name) {
            ev.id = id;
            call(ev);
        }
    })
}

// Data
const ChunkData = ({ x, z }) => {
    const DATA = {} 
    // Coords
    let chunkX = Math.floor(x / 16) * 16,
        chunkZ = Math.floor(z / 16) * 16;
    // Set Data
    DATA['minX'] = chunkX;
    DATA['minZ'] = chunkZ;
    DATA['maxX'] = chunkX + 15;
    DATA['maxZ'] = chunkZ + 15;
    DATA['slime'] = slime(chunkX,chunkZ);
    // Return Data
    return DATA;
}



// Dimension & World
const Dimension = {
    overworld: world.getDimension('overworld'),
    nether: world.getDimension('nether'),
    the_end: world.getDimension('the_end')
}
const World = {
    // Chat 
    command: async cmd => {
        let x = cmd.split('::');
        if (x[0] == 'run') return await system.run(() => Dimension.overworld.runCommand(x[1]));
        else if (x[0] == 'async') return await system.run(() => Dimension.overworld.runCommandAsync(x[1]));
    },
    print: msg => world.sendMessage(msg.toString()),
    ephemeral: (msg,sender) => system.run(() => { sender.runCommand(`tellraw @s {"rawtext":[{"text":"${msg}"}]}`) })
}


export { 
    Event, Dimension, World,
    ChunkData, Player, NBT
}
