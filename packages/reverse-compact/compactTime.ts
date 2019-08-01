/**
 * Compacts seconds to days, hours, minutes, and seconds.
 */
export function compactTime(seconds: number): string {
  if (typeof seconds !== 'number') {
    return 'NaN Seconds';
  }
  function plural(num: number, unit: string) {
    num = Math.floor(num);
    return num + ' ' + unit + (num === 1 ? '' : 's');
  }

  if (seconds < 120) {
    return plural(seconds, 'Second');
  }
  if (seconds < 60 * 60) {
    return plural(seconds / 60, 'Minute') + ' '
      + plural(seconds % 60, 'Second');
  }
  if (seconds < 24 * 60 * 60) {
    return plural(seconds / (60 * 60), 'Hour') + ' '
      + plural(seconds % (60 * 60) / 60, 'Minute') + ' '
      + plural(seconds % 60, 'Second');
  }
  return plural(seconds / (24 * 60 * 60), 'Day') + ' '
    + plural(seconds % (24 * 60 * 60) / (60 * 60), 'Hour') + ' '
    + plural(seconds % (60 * 60) / 60, 'Minute') + ' '
    + plural(seconds % 60, 'Second');
}
