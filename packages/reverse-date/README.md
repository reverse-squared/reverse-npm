# @reverse/date
> Useful functions for handling dates.

## Install
```
npm install @reverse/date
```

## Table of Contents
- [dateEqualsNow](#dateEqualsNowmonth-date-year)
- [formatDate](#formatDatedate)
- [getEasterDate](#getEasterDateyear)

--- 

## Usage
### dateEqualsNow(month, date, year)
> Checks if a given date is the same date as today.
#### Parameters
- `month: Number`: The month in a number. Leading zero optional.
- `date: Number`: The date.
- `year: Number`: The full year.
#### Example
```js
import { dateEqualsNow } from '@reverse/date';

// Assuming the today's date is 6/19/2019.

dateEqualsNow(06, 19, 2019);
// true

dateEqualsNow(04, 20, 2069);
// false
```

### formatDate(date)
> A nicely formatted date with time in AM and PM.
#### Parameters
- `date: Date`: A date to format.
#### Example
```js
import { formatDate } from '@reverse/date';

formatDate(new Date());
// Example Output: "2019-06-21 at 10:53am"
```

### getEasterDate(year)
> Finds the month and date of easter of that year.
#### Paramerters
- `year: Number`: The email to check.
#### Example
```js
import { getEasterDate } from '@reverse/date';

getEasterDate(2020);
// "04.12"
```
