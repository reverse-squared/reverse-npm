# @reverse/encoder

> Encodes values into a randomly generated string.

Generates random identifiers for input strings, the same input string will be the same output
string (cached, not hashing). Used in some Reverse Squared projects for generating Error Codes
that we can decode but outsiders without access will not be able to.

## Install

```
npm install @reverse/encoder
```

---

## Usage

### Encoding Values

Use the `encode()` function to encode a value. It returns the code that you will have to decode.

```js
import { encode } from '@reverse/encoder';

encode('Hello!');
// Example Output: "91887D"
```

If you encode the same value twice, the returned code will be the same as the first time you encoded that value.

### Decoding Values

To decode the value, use the `decode()` function. It will return the original value that you encoded.

```js
import { decode } from '@reverse/encoder';

// Assuming we use the same code in the above example.
decode('91887D');
// "Hello!"
```

### Custom Identifier Generator

This module also exposes two functions for using the ID generator.

```js
import { setIDGenerator } from '@reverse/encoder';

generateID(); // -> "123456" Example ID from default generator.

setIDGenerator(() => 'Hello'); // All generated IDs will be "Hello",
// this will crash the application after
// encoding two separate values.

generateID(); // -> "Hello"
```
