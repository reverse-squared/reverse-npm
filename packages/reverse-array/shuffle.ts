import { randomOf } from "@reverse/random";
import { remove } from "./remove";

/**
 * Shuffles an array and returns it.
 */
export function shuffle<T>(array: T[]): T[] {
  const newArray: Array<T> = [];
  let shuffleArray = array.concat();

  while (shuffleArray.length > 0) {
    const item = randomOf(shuffleArray);
    newArray.push(item);
    shuffleArray = remove(shuffleArray, item);
  }

  return newArray;
}
