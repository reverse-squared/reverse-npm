/**
 * Returns true a percent amount of the time.
 */
export function chance(percent: number) {
  return Math.random() * 100 <= percent;
}
