# @reverse/array
> Useful functions for managing arrays.

## Install
```
npm install @reverse/array
```

## Table of Contents
- [moveIndex](#moveIndexarray-oldIndex-newIndex)
- [shuffle](#shufflearray)

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
