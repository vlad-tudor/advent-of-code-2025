Advent of Code 2025, lazily written in node (bun?)

```bash
bun index.ts <day> [p1|p2]
bun index.ts 1
bun index.ts 1 p1
```

Solutions live in `day<N>/index.ts`, exporting a `Day` object with `p1` and `p2` methods. Find it in `types.ts`

Add your input in each day folder as `input-p1.txt` and `input-p2.txt` respectively.

```ts
import type { Day } from "../types";

const day1: Day = {
  p1() {
    /* ... */
  },
  p2() {
    /* ... */
  },
};

export default day1;
```
