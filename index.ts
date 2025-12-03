import type { Day } from "./types";

const [dayArg, partArg] = process.argv.slice(2);

if (!dayArg) {
  console.log("Usage: bun index.ts <day> [p1|p2]. See README.md");
  process.exit(1);
}

const daySelection = parseInt(dayArg, 10);
const dayModule: { default: Day } = await import(
  `./day${daySelection}/index.ts`
);

const runPart = async (part: keyof Day) => {
  const result = await dayModule.default[part]();
  console.log(result);
};

// TODO: tidy up
if (partArg === "p1" || partArg === "p2") {
  await runPart(partArg);
} else {
  await runPart("p1");
  await runPart("p2");
}
