# @reverse/debounce
> Debounce, Throttle, and Queue Execution Factories

You can install with nodejs and npm
```
npm i @reverse/emitter
```

## Table of Contents**
- [debounce](#debounce)
- [throttle](#throttle)
- [queueExec](#queueExec)

## debounce
```js
import { debounce } from '@reverse/debounce';

function thing() {
  console.log('Thing was ran!');
}

const debouncedThing = debounce(thing, 500);
```

## throttle
```js
import { throttle } from '@reverse/debounce';

function thing() {
  console.log('Thing was ran!');
}

const throttledThing = throttle(thing, 500);
```

## queueExec
```js
import { queueExec } from '@reverse/debounce';

function thing() {
  console.log('Thing was ran!');
}

const queuedThing = queueExec(thing, 500);
```
