
#### `@extras` adds parity with NodeJs and adds features from other languages

---

```js
import { require } from 'BPM/.js'

(async () => {
    const {
        sleep, clearInterval,
        runInterval, setTimeout
    } = await require('@extras');

    await sleep(1000) // ms
    let x = runInterval(function(){},500);
    clearInterval(x)
    setTimeout(function(){},200);
})();
```