import { readLines } from "../utils";
import { parseRotation, START_POINTER_VALUE } from "./utils";

export default function part2() {
  let pointer = START_POINTER_VALUE;

  // NOTE: day2 input is the same as day1
  // const lines = readLines("./day1/input-p1.txt");
  const lines = readLines("./day1/input-p1.txt");

  // counts amounts of time pointer is at 0
  let clicks = 0;

  for (const line of lines) {
    const rotation = parseRotation(line);

    // I feel shame
    for (let index = 0; index < Math.abs(rotation); index++) {
      pointer += rotation > 0 ? 1 : -1;
      if (pointer % 100 === 0) {
        clicks++;
      }
    }
  }

  return { clicks };
}
