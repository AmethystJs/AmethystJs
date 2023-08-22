![AmethystJs](assets/banner.png)

# AmethystJs
### Minecraft Bedrock scripting api wrapper 
---

### Introduction

> **Q:** What is this?
```
AmethystJs is an additional layer
to the Minecraft Bedrock scripting api
said additional layer has a modules system
in addition to containing 4 native modules
```

> **Q:** Is it compatible with vanilla scripting api?
```
Yes, AmethystJs is compatible with the
vanilla Scripting API, in fact the idea of
AmethystJs is that you can migrate an
advanced project over time
```
---
### Requirements 
> The requirements will depend on the version of AmethystJs, so check the version requirements in the [releases](https://github.com/AmethystJs/AmethystJs/releases) tab of the version you will use. 

> You must download the .zip and unzip it in the mother path of your addon (for example) `development_behavior_packs/addonTest/`

### How to start 

> **1.** Syntax
##### AmethystJs runs in an async function that runs itself
```js
// Import "require" function
import { require } from 'BPM/.js'

(async () => {
    // Modules
    const { World } = await require('@core'); // or "const core = await require('@core');"
    // Code
    World.print('hello world :p');
})();
```

> **2.** Event 
##### `Event` object from @core module
```js
import { require } from 'BPM/.js'

(async () => {
    const { Event } = await require('@core');

    // Event follow
    Event.follow('before/chatSend', ev => {});
    Event.follow('after/itemUse', ev => {});
    // Event shortcurt (place, break, spawn and die)
    Event.follow('spawn::shulker', ev => {});
    // Multiple parameters
    Event.follow('spawn::shulker&iron_golem&...', ev => {});
})();
```
> **3.** World
##### `World` object from @core module
```js
import { require } from 'BPM/.js'

(async () => {
    const { World } = await require('@core'); 

    World.print('hello world :p');
    World.ephemeral('Shh', playerObject);
    World.command('run::say hi');
    World.command('async::say hi');
})();

```
> **4.** Dimension
##### `Dimension` object from @core module
```js
import { require } from 'BPM/.js'

(async () => {
    const { Dimension } = await require('@core'); 

    const {
        overworld, nether, the_end
    } = Dimension;
})();
```
> **5.** ChunkData
##### `ChunkData` function from @core module
```js
import { require } from 'BPM/.js'

(async () => {
    const { ChunkData } = await require('@core'); 

    const {
        minX, // 0
        minZ, // 0
        maxX, // 15
        maxZ, // 15
        slime // false
    } = ChunkData({ x: 0, z: 0 });
})();
```
---
### Others

##### [`Player`](docs/player.md) class from @core module
##### [`NBT`](docs/nbt.md) object from @core module
##### [`@slash`](docs/slash.md) module
##### [`@extras`](docs/extras.md) module
##### [`@colors`](docs/colors.md) module
##### [`BPM`](docs/bpm.md) require, module & server
##### [`module creation`](docs/creation.md) guide
---
# [My Discord server](https://discord.gg/96Uyt3KWT5)