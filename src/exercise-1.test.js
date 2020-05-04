import { main } from "./exercise-1.js";

describe("Exercise 1", () => {
  test("The main function should throw an exception", () => {
    expect(() => main()).toThrow();
  });
  test('The error should have the error message "This is not an exercise"', () => {
    expect(() => main()).toThrow(new Error("This is not an exercise"));
  });
});
