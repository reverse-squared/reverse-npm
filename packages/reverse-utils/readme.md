# @reverse/utils
> Utility functions used by other @reverse packages

You can install with nodejs and npm
```
npm i @reverse/utils
```

## Table of Contents
- [catchFallback](#catchFallback)
- [classify](#classify)

## catchFallback
Runs the passed function into a try/catch block, and if it throws an error it will return the second paramater

```js
catchFallback(() => mightThrowAnError(params), 'default');
```

## classify
Turns the passed function into a class. The created class doesn't have to be created with the `new` keyword.
