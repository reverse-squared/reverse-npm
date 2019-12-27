# @reverse/utils

> Really simple utility functions used by other @reverse packages

You can install with nodejs and npm

```
npm i @reverse/utils
```

## Table of Contents

- [catchFallback](#catchFallback)

## catchFallback

Runs the passed function into a try/catch block, and if it throws an error it will return the second paramater

```js
catchFallback(() => mightThrowAnError(params), 'default');
```

## switchObject

Returns `object[key]` or `object.default`
