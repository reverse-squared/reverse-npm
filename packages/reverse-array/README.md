# @reverse/array

> Useful functions for managing arrays.

## Install

```
npm install @reverse/array
```

## Table of Contents

- [moveIndex](#moveIndexarray-oldIndex-newIndex)
- [removeAt](#removeAtarray-index)
- [removeBy](#removeByarray-value)
- [shuffle](#shufflearray)
- [unique](#uniquearray)

---

## Usage

### moveIndex(array, oldIndex, newIndex)

> Moves an element in an array to a new part of the array.

#### Parameters

- `array: Array`: The array to modify.
- - `oldIndex: Number`: The index of the item to move.
- - `newIndex: Number`: The new index of the item to move.

#### Example

```js
import { moveIndex } from '@reverse/array';

moveIndex([1, 2, 3], 0, 2);
// [2, 3, 1]
```

### removeAt(array, index)

> Removes an element from an array by it's index.

#### Parameters

- `array: Array`: The array to modify.
- `index: Number` The index to remove.

#### Example

```js
import { removeAt } from '@reverse/array';

removeAt([1, 2, 3], 1);
// [1, 3]
```

### removeBy(array, value)

> Removes an element from an array by it's value.

#### Parameters

- `array: Array`: The array to modify.
- `value: any` The element to remove.

#### Example

```js
import { removeBy } from '@reverse/array';

removeBy(['A', 'B', 'C'], 'B');
// ['A', 'C']
```

### shuffle(array)

> Shuffles an array and returns it.

#### Paramerters

- `array: Array`: The array to shuffle.

#### Example

```js
import { shuffle } from '@reverse/array';

shuffle([1, 2, 3]);
// Example Output: [2, 3, 1]
```

### unique(array)

> Returns an array of all the unique values of an array. (i.e. Removes duplicate values.)

#### Parameters

- `array: Array`: The array to modify.

#### Example

```js
import { unique } from '@reverse/array';

unique([1, 1, 2, 3, 4, 4, 4, 4, 5]);
// [1, 2, 3, 4, 5]
```
