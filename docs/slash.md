#### `@slash` allows you to easily create commands with the `./{name}` prefix

---

```js
import { require } from 'BPM/.js'

(async () => {
    const { Slash } = await require('@slash');
    const World = await require('@core::World');

    Slash.Register({
        name: 'test',
        run: (user,args) => {
            World.print('hi');
        }
    });
    
    // When you put "./test" in the chat it will print "hi"

})();
```