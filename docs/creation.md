#### Creating modules 
> The creation of modules is very simple, it only consists of a few steps, below are the steps to follow 

---

#### 1.-
> Create a folder like this `@{name(lowercase)}` in the following path: `scripts/BPM/`

#### 2.-
> Inside your module folder create the following file: `pkg.js` and put the following
```js
const module = {
    main: 'src/main.js', // inside your module folder
    version: '1.0-stable' // It has not yet been used at the moment
}; export { module }
```

#### 3.-
> And that's it! you can now start exporting functions within your file specified in `main` property.
