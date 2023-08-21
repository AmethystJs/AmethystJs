#### What is `BPM`?
> BPM or “Bedrock Package Manager” consists of a system of "modules" for Minecraft Bedrock, these modules start with the `@` character in the `scripts/BPM/` folder

---

#### Require

> `require` is the essential part of BPM, since this function allows to import and store the modules in a local cache 

#### • use
```js
import { require } from 'BPM/.js'

(async () => {
    /* Destructuring import */
    // module name                     ↓
    const { World } = await require('@core');
    /* Word import */
    const core = await require('@core');
    /* Methods import */
    const Player = await require('@core::Player');
    // specify method/property/function    ↑
})();
```
#### • local cache
> Something to note about `require` is that once you import a module or route, it saves all exported methods, properties, etc in the file in a local cache, so it is faster to access those functions exported from the i module a second time.

---

#### module & module.exports
> `module` and its `exports` property also play a role, although not as important, but useful in certain aspects, it allows to have global data from a single object (as a data store)

#### • use
> It's not necessarily just async functions
```js
// "main.js"
import { module } from 'BPM/.js'
module({ globalValue1: 'hellou :p' });

// Imagine this is another file (test.js)
import { module } from 'BPM/.js'

let x = module.exports['globalValue1'];
console.warn(x);
```
> this allows data to be globally accessible to any file without having to import from a path.

---
#### server (really instance)
> It is a gametest instance (Gametest.Register) in a global way to perform any action exclusive to the instances in the global scope, an example of this is the `Player` class of the `@core` module which uses instance tab to create the simulated players.