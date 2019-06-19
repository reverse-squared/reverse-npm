# reverse-string
> Useful functions for modifying and managing strings.

## Install
Install with `@reverse/string`.

## Table of Contents
- [isValidEmail](#isValidEmailemail)
- [capitalize](#capitalizestring)
- [format](#formatformat-variables)

--- 

## Usage
### isValidEmail(email)
> Checks if a email is a valid formatted email.
#### Paramerters
- `email`: The email to check.
#### Example
```js
import { isValidEmail } from '@reverse/string';

isValidEmail('example@example.com');
// true

isValidEmail('ample.com');
// false

```

### capitalize(string)
> Capitalizes the first letter of a string.
#### Parameters
- `string`: The string to modify.
#### Example
```js
import { capitalize } from '@reverse/string';

capitalize('hello');
// "Hello"

capitalize('123abc');
// "123abc"
```

### format(format, ...variables)
> Formats a string by substituting variables.
#### Parameters
- `format`: The string to format.
- `...variables`: Any variables to substitute in the string.
#### Example
```js
import { format } from '@reverse/string';

format('Hello $1.', 'World');
// "Hello World."

format('I like $2 and $1.', 'cats', 'dogs');
// "I like dogs and cats."
```
