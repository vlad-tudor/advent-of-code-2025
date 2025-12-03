import { readLines } from "../utils";
import { parseRotation, START_POINTER_VALUE } from "./utils";

export default function part2() {
  let pointer = START_POINTER_VALUE;

  // NOTE: day2 input is the same as day1
  // const lines = readLines("./day1/input-p1.txt");
  const lines = readLines("./day1/input-test.txt");

  // counts amounts of time pointer is at 0
  let clicks = 0;

  for (const line of lines.slice(0, 4)) {
    const rotation = parseRotation(line);
    const newPointer = pointer + rotation;

    // checks the difference in 'hundreds' which has occurred,
    // which signifies how many times the needle has gone past 0
    const zeroClicks = Math.floor(newPointer / 100) - Math.floor(pointer / 100);

    clicks += Math.abs(zeroClicks);

    pointer = newPointer;
  }

  return { clicks };
}
