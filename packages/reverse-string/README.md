# @reverse/string
> Useful functions for modifying and managing strings.

You can install with nodejs and npm
```
npm i @reverse/string
```

## Table of Contents
- [capitalize](#capitalizestring)
- [format](#formatformat-variables)
- [isValidEmail](#isValidEmailemail)

## capitalize(string)
> Capitalizes the first letter of a string.
### Parameters
- `string: String`: The string to modify.
### Example
```js
import { capitalize } from '@reverse/string';

capitalize('hello');
// "Hello"

capitalize('123abc');
// "123abc"
```

## format(format, ...variables)
> Formats a string by substituting variables.
### Parameters
- `format: String`: The string to format.
- `...variables: Any`: Any variables to substitute in the string.
### Example
```js
import { format } from '@reverse/string';

format('Hello $1.', 'World');
// "Hello World."

format('I like $2 and $1.', 'cats', 'dogs');
// "I like dogs and cats."
```

## isValidEmail(email)
> Checks if a email is a valid formatted email.
### Paramerters
- `email: String`: The email to check.
### Example
```js
import { isValidEmail } from '@reverse/string';

isValidEmail('example@example.com');
// true

isValidEmail('ample.com');
// false
```

## plural(number, word)
> Makes a word plural if the number is not one.
### Parameters
- `number: number`: The amount of that object.
- `word: string`: The word to plural-ize.
### Example
```js
import { plural } from '@reverse/string';

plural(0, 'Dog');
// Dogs

plural(1, 'Dog');
// Dog

plural(10, 'Dog');
// Dogs
```
