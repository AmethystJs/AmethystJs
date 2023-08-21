#### What is `BPM`?
> BPM or “Bedrock Package Manager” consists of a system of "modules" for Minecraft Bedrock, these modules start with the `@` character in the `scripts/BPM/` folder

#### Require

> `require` is the essential part of BPM, since this function allows to import and store the modules in a local cache 

#### • uses
```js
import { require } from 'BPM/.js'

(async () => {
    /* Normal import */
    // module name                     ↓
    const { World } = await require('@core');
    /* Methods import */
    // module name                 ↓
    const Player  await require('@core::Player');
    // specify method/property/function   ↑
})();
```