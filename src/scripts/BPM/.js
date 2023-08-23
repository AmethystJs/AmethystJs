import * as GT from '@minecraft/server-gametest';
import { world } from '@minecraft/server';

const localCache = {}

// Require
const require = async path => {
    try {
        if (!path.startsWith('@')) return await import(path);
        else if (!path.includes('::')) {
            /* Cache Module */
            if (localCache[path]) return localCache[path];
            /* New Module */
            let file = await import(`BPM/${path}/pkg.js`);
            let mod = await import(`BPM/${path}/${file.module.main}`);
            localCache[path] = mod;
            // Load
            return mod;
        } else if (path.includes('::')) {
            let root = path.split('::');
            /* Cache module */
            if (localCache[root[0]]) return localCache[root[0]][root[1]];
            /* New Module */
            let file = await import(`BPM/${root[0]}/pkg.js`);
            let mod = await import(`BPM/${root[0]}/${file.module.main}`);
            localCache[root[0]] = mod;
            // Load
            return mod[root[1]];
        }
    } catch (e) { console.error(e) }
}

// Module 
const module = data => {
    if (typeof data != 'object') return;
    // Upload to module
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key))
        module.exports[key] = data[key];
    }
}

module.exports = {};

// Instance 
let server = null;
GT.registerAsync('AmethystJs','Core', test => {
    server = test;
    console.warn('§uAmethystJs §rinstance initialized');
})
    .maxTicks(999999999)
    .structureName('Amethyst:Server')
    .maxAttempts(255);
    
world.getDimension('overworld').runCommand('execute positioned 999999999 200 999999999 run gametest run amethystjs:core')
// Exports
export { require, module, server }