# @reverse/random
> Easy random generation.

You can install with nodejs and npm
```
npm i @reverse/random
```

## Table of Contents
- 

## Usage
### randomInt(min, max)
> Generates a random whole number between two values.
#### Parameters
- `min: Number`: The minimum number to generate inclusivly.
- `max: Number`: The maximum number to generate inclusivly.
#### Example
```js
import { randomInt } from '@reverse/random';

randomInt(1, 5);
// Example Output: 5
```

### chance(percent)
> Returns true a percent amount of the time.
#### Parameters
- `percent: Number`: The percent chance to return true.
#### Example
```js
import { chance } from '@reverse/random';

chance(100);
// true

chance(0)
// false

chance(50)
// Example Output: true
```

### randomList(list, items, requiredValues)
> Picks multiple values from an array.
#### Parameters
- `list: Array`: The array to choose from.
- `items: Number`: How many items should be returned. Default 1.
- `requiredValues: Array`: The values that have to be in the returned items. Default [].
#### Example
```js
import { randomList } from '@reverse/random';

randomList([1, 2, 3, 4], 1, []);
// Exanple Output: [3]

randomList([1, 2, 3, 4], 2, []);
// Exanple Output: [1, 3]

randomList([1, 2, 3, 4], 3, [3]);
// Exanple Output: [3, 3, 3]
```
