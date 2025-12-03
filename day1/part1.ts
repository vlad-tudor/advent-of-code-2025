import { readLines } from "../utils";

/**
 * Parses the line to get a number to rotate by
 * @param rotationValue  R/L followed by a number
 * @returns rotation, R -> positive, L -> negative
 */
function parseRotation(rotationValue: string): number {
  const [direction, amountString] = [rotationValue[0], rotationValue.slice(1)];

  const amount = parseInt(amountString);

  if (direction !== "R" && direction !== "L") {
    throw new Error("wrong data parsed");
  }

  return direction === "R" ? amount : -amount;
}

export default function part1() {
  let START_POINTER = 50;
  const lines = readLines("./day1/input-p1.txt");

  // counts amounts of time pointer is at 0
  let clicks = 0;

  for (const line of lines) {
    const rotation = parseRotation(line);
    START_POINTER += rotation;

    // pointer is between 0-99,
    // so clicks divisible by 100 are 'as if' the pointer has returned to 0
    // Math.abs cause JS is insane and -0 exists
    if (Math.abs(START_POINTER % 100) === 0) {
      clicks++;
    }
  }
  return { clicks };
}
