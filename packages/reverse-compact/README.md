# @reverse/compact
> Functions for compacting numbers.

## Install
```
npm install @reverse/compact
```

## Table of Contents
- [compactNumber](#compactNumbernum-zeroDecimal)
- [compactMiniNumber](#compactMiniNumbernum)
- [compactTime](#compactTimeseconds)

--- 

## Usage
This package uses the following letters for compacting numbers:
```js
let compactNumberMap = {
  4: 'K', // 1,000 -> 1K (only in compactMini)
  7: 'M', // 1,000,000 -> 1M
  10: 'B', // 1,000,000,000 -> 1B
  13: 'T', // 1,000,000,000,000 -> 1T
  16: 'Q', // 1,000,000,000,000,000 -> 1Q
  19: 'q', // 1,000,000,000,000,000,000 -> 1q
  22: 'S', // 1,000,000,000,000,000,000,000 -> 1S
  25: 's', // 1,000,000,000,000,000,000,000,000 -> 1s
  28: 'O', // 1,000,000,000,000,000,000,000,000,000 -> 1O
  31: 'N', // 1,000,000,000,000,000,000,000,000,000,000 -> 1N
  34: 'D', // 1,000,000,000,000,000,000,000,000,000,000,000 -> 1D
};
```

### compactNumber(num, zeroDecimal)
> Compacts a number using an letter.
#### Parameters
- `num: Number`: The number to compact.
- `zeroDecimal: Boolean`: Whether or not to include a `.0` at the end of a number.
#### Example
```js
import { compactNumber } from '@reverse/compact';

compactNumber(1000000, false);
// "1M"

compactNumber(1500000, false);
// "1.5M"

compactNumber(2000000, true);
// "2.0M"
```

### compactMiniNumber(num)
> Compacts a number, with support for the K (1,000) unit.
#### Parameters
- `num: Number`: The number to compact.
#### Example
```js
import { compactMiniNumber } from '@reverse/compact';

compactMiniNumber(1000000);
// "1M"

compactMiniNumber(1500);
// "1.5K"
```

### compactTime(seconds)
> Compacts seconds to days, hours, minutes, and seconds.
#### Parameters
- `seconds: Number`: The amount of seconds.
#### Examples
```js
import { compactTime } from '@reverse/compact';

compactTime(1234567890);
// "14288 Days 23 Hours 31 Minutes 30 Seconds"
```
