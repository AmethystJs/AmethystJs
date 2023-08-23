import { world } from '@minecraft/server';

export const Slash = {
    Commands: {},
    Register: options => Slash.Commands[options.name] = {
        run: options.run
    }
}

world.beforeEvents.chatSend.subscribe(ev => {
    const { message } = ev;
    let cmd = message.split(' ')[0].replace('./','');
    if (!message.startsWith('./')) return;
    ev.cancel = true;
    if (!Slash.Commands[cmd]) return world.sendMessage(`§cInvalid command "${cmd}"`);
    // Command
    let snd = ev.sender, arg = message.split(' ').slice(1);
    Slash.Commands[cmd].run(snd,arg);
});
