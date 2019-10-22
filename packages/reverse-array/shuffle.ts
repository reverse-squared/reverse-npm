/**
 * Shuffles an array and returns it.
 */
export function shuffle<T>(array: T[]): T[] {
  var newArray: T[] = [];
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    if (newArray.hasOwnProperty(currentIndex)) {
      temporaryValue = newArray[currentIndex];
    } else {
      temporaryValue = array[currentIndex];
    }
    newArray[currentIndex] = array[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
}
