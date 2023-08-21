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
    //  it's a async function  ↓
    const { World } = await require('@Core');
    // Code
    World.print('hello world :p');
})();
```
