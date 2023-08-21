`@colors` like [colors](https://npmjs.com/package/colors) npm, allows you to color a String to a color by using a keyword at the end of the string

--- 
> **Colors list**
```js
const CODE = {
    black: 0,
    dark_blue: 1,
    dark_green: 2,
    dark_aqua: 3,
    dark_red: 4,
    dark_purple: 5,
    gold: 6,
    gray: 7,
    dark_gray: 8,
    blue: 9,
    green: 'a',
    aqua: 'b',
    red: 'c',
    light_purple: 'd',
    yellow: 'e',
    white: 'f',
    minecoin_gold: 'g',
    material_quartz: 'h',
    material_iron: 'i',
    material_netherite: 'j',
    material_redstone: 'm',
    material_copper: 'n',
    material_gold: 'p',
    material_emerald: 'q',
    material_diamond: 's',
    material_lapis: 't',
    material_amethyst: 'u'
}
```
> **How to use**
```js
import { require } from 'BPM/.js'

(async () => {
‎    const World = await require('@core::World');
    await require('@colors');

    World.print('hello'.red);
})();
```