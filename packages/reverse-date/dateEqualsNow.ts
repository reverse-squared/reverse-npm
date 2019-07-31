/**
 * Checks if a given date is the same date as today.
 */
function dateEqualsNow(month: number, date: number, year: number) {
  const now = new Date();

  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();
  const nowYear = now.getFullYear();

  return nowMonth === month && nowDate === date && nowYear === year;
}

export = dateEqualsNow;
