import { readLines } from "../utils";
import { parseRotation, START_POINTER_VALUE } from "./utils";

export default function part1() {
  let pointer = START_POINTER_VALUE;
  const lines = readLines("./day1/input-p1.txt");

  // counts amounts of time pointer is at 0
  let clicks = 0;

  for (const line of lines) {
    const rotation = parseRotation(line);
    pointer += rotation;

    // pointer is between 0-99,
    // so clicks divisible by 100 are 'as if' the pointer has returned to 0
    // Math.abs cause JS is insane and -0 exists
    if (Math.abs(pointer % 100) === 0) {
      clicks++;
    }
  }
  return { clicks };
}
