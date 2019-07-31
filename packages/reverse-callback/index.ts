/** Returns the first argument. Does nothing to it. */
export const identity = (x) => x;
/**
 * Calls the passed argument.
 *
 * Useful for calling everything in an array:
 *    `functionArray.forEach(call);`
 */
export const call = (x: () => any) => x();
/**
 * Useful for finding an item in an array using .find()
 *    `array.find(propEquals('name', 'dave'));`
 */
export const propEquals = (prop: string, value: any) => (item) => item[prop] === value;
