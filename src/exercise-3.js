import { thisMightFail } from "./exercise-3.util.js";

// To test this exercise run:
// npm run test exercise-3

// Call thisMightFail and return its result if it succeeds
// If thisMightFail throws an exception try again.
// After 5 tries throw an Error with the error message "Number retries exceeded"
export function main() {
  return thisMightFail();
}
