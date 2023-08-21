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
in addition to containing 3 native modules
```

> **Q:** Is it compatible with vanilla scripting api?
```
Yes, AmethystJs is compatible with the
vanilla Scripting API, in fact the idea of
AmethystJs is that you can migrate an
advanced project over time
```
---

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

> **2.**
##### `Event` object from @core native module
```js
import { require } from 'BPM/.js'

(async () => {
    const { Event } = await require('@core');

    // Event follow
    Event.follow('before/chatSend',ev => {});
    Event.follow('after/itemUse',ev => {});
    // Event shortcurt (place, break, spawn and kill)
    Event.follow('spawn::shulker', ev => {});
    // Multiple parameters
    Event.folmow('spawn::shulker&iron_golem&...', ev => {});
})();
```