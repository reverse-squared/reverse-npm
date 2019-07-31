/**
 * Formats a string by substituting variables.
 */
export function format(format: string, ...variables: any[]) {
  return format.replace(/\$[0-9]+/g, (x) => String(variables[parseInt(x.substring(1)) - 1]));
}
