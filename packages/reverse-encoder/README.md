# @reverse/encoder
> Encodes values into a string.

## Install
```
npm install @reverse/encoder
```

--- 

## Usage
### Encoding Values
Use the `encode()` function to encode a value. It returns the code that you will have to decode.
```js
import { encoder } from '@reverse/encoder';

encoder.encode('Hello!');
// Example Output: "91887D"
```

If you encode the same value twice, the returned code will be the same as the first time you encoded that value.

### Decoding Values
To decode the value, use the `decode()` function. It will return the original value that you encoded.
```js
import { encoder } from '@reverse/encoder';

// Assuming we use the same code in the above example.
encoder.decode('91887D');
// "Hello!"
```
