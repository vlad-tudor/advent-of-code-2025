export const START_POINTER_VALUE = 50;

/**
 * Parses the line to get a number to rotate by
 * @param rotationValue  R/L followed by a number
 * @returns rotation, R -> positive, L -> negative
 */
export function parseRotation(rotationValue: string): number {
  const [direction, amountString] = [rotationValue[0], rotationValue.slice(1)];

  const amount = parseInt(amountString);

  if (direction !== "R" && direction !== "L") {
    throw new Error("wrong data parsed");
  }

  return direction === "R" ? amount : -amount;
}
