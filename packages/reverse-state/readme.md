# @reverse/state

> State holders which can be used with React Hooks to easily display data.

You can install with nodejs and npm

```
npm i @reverse/state
```

## Table of Contents

- [SimpleState](#SimpleState)
- [StorageState](#StorageState) (browser only)
- [hookFromState](#hookFromState) (requires react)

# SimpleState

A Simple State holder. Contains an internal value and an event emitter.

# Storage State

Same as Simple State, but it syncs it's value to a localStorage item. Supports all values serializable by JSON.stringify/JSON.parse.

# hookFromState

Creates a React Hook using a state's get method and event listeners.
