import { readFileSync } from "fs";

export function readFile(path: string): string {
  return readFileSync(path, "utf-8");
}

export function readLines(path: string): string[] {
  return readFile(path).trim().split("\n");
}
