#### The `Player` class allows you to create a simulated player

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
    let user = new Player('bot',{ x: 0, y: 60, z: 0 });
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
    let user = new Player('coolBot',{ x: 0, y: 60, z: 0 });
    /*
       -------------- Interpreter --------------
       [] <- group controller
       *n <- repeat action
       func::arg <- functions (for example, use)
       -----------------------------------------
    */
    // you can add "true" as the second parameter to print the script in the chat :s
    user.script('[]jump&attack * 10 -> wait::40 -> disconnect');
    /*
       Repeat jump and attack (both at the
       same time by group controller) for 10
       times, wait 40gts (2s) and disconnect
    */
})();
```