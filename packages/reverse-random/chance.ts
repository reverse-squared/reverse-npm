/**
 * Returns true a percent amount of the time.
 */
export function chance(percent: number) {
  if(typeof percent !== 'number') {
    throw new TypeError('Provided percent must be a number.');
  }
  
  return Math.random() * 100 <= percent;
}
