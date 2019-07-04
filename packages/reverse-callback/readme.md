# @reverse/callback
> Little callbacks you can use to work faster.

I wrote these since I was tired of repeating some of the same code, so I threw
these little things in a helper function package.

You can install with nodejs and npm
```
npm i @reverse/callback
```

## Table of Contents**
- [identity](#identity)
- [call](#call)
- [propEquals](#propEquals-[generator])

## identity
Returns the passed argument.
```js
export const identity = (x) => x;
```
Calls the passed argument.
```js
export const call = (x) => x();
```

Useful for calling everything in an array: `functionArray.forEach(call);`

## propEquals [generator]
Creates a callback for if the passed argument's property equals a certain value.
```js
const propEquals = (prop, value) => (item) => item[prop] === value;
```

Useful for finding an item in an array using .find()
`array.find(propEquals('name', 'dave'));`
