#### The `NBT` object allows you to create, set, and get dynamic properties in the world

---

```js
import { require } from 'BPM/.js'
(async () => {
    const { Event, NBT }  = await require('@core');
    
    // Define props
    NBT.Create({
        name: 'numberProp',
        type: 'number'
    });
    NBT.Create({
        name: 'booleanProp',
        type: 'boolean'
    });
    NBT.Create({
        name: 'stringProp',
        type: 'string',
        size: 200 // default 1000
    });


    // Load props
    Event.follow('after/worldInitialize', ev => {
        NBT.Reader(ev);
    });

    // Get and Set 
    NBT.setData('booleanProp', true);
    console.warn(NBT.getData('booleanProp'));
})();
```