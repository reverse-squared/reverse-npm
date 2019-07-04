/** Returns the first argument. Does nothing to it. */
const identity = (x) => x;
/**
 * Calls the passed argument.
 *
 * Useful for calling everything in an array:
 *    `functionArray.forEach(call);`
 */
const call = (x) => x();
/**
 * Useful for finding an item in an array using .find()
 *    `array.find(propEquals('name', 'dave'));`
 */
const propEquals = (prop, value) => (item) => item[prop] === value;

module.exports = {
  identity,
  call,
  propEquals,
};
