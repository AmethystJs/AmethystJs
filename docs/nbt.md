#### The `NBT` object allows you to create, set, and get dynamic properties in the world

---

```js
import { require } from 'BPM/.js
(async () => {
    const { Event, NBT }  = await require('@core');
    
    NBT.Create({
        name: 'numberProp',
        type: 'number'
    });
    NBT.Create({
        name: 'booleanProp',
        type: 'number'
    });
    NBT.Create({
        name: 'stringProp',
        type: 'string',
        size: 200 // default 1000
    });


})();
```