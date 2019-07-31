/**
 * Returns true a percent amount of the time.
 */
function chance(percent: number) {
  return Math.random() * 100 <= percent;
}

export = chance;
