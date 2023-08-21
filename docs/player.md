#### the `Player` class allows you to create a simulated player

---

> **Methods**
```
respawn
disconnect
kill
jump
attack
trident
use
interact
glide
fly
rotate
shift
trident
select
swim
drop
stop
wait
script 
```
> **Create player**
```js
import { require } from 'BPM/.js
(async () => {
    const Player await require('@core::Player');
    const sleep = await require('@extras::sleep');
    // Player
    await sleep(500) // ms
    let user = new Player({ x: 0, y: 60, z: 0 });
})();
```
> **Script**
```js
import { require } from 'BPM/.js
(async () => {
    const Player await require('@core::Player');
    const sleep = await require('@extras::sleep');
    // Player
    await sleep(500) // ms
    let user = new Player({ x: 0, y: 60, z: 0 });
    /*
       -------------- Interpreter --------------
       [] <- group controller
       *n <- repeat action
       func::arg <- functions (for example, use)
       -----------------------------------------
    */
    user.script(
})();
```