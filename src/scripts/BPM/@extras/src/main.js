import { system } from '@minecraft/server';

// Others
function sleep (ms) {
    return new Promise(res => system.runTimeout(res,ms/50));
}

// Node
function setTimeout(callback,ms) {
    system.runTimeout(callback,ms/50);
}
function setInterval(callback,ms) {
    return system.runInterval(callback,ms/50);
}
function clearInterval(interval) {
    system.clearRun(interval)
}


// Exports
export {
    setTimeout, setInterval, clearInterval,
    sleep
}
