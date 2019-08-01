/** Returns the first argument. Does nothing to it. */
export const identity = <T>(x: T) => x;
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
export const propEquals = <PropName extends string | number | symbol, Type>(prop: PropName, value: Type) => (item: { [K in PropName]: Type }) => item[prop] === value;
