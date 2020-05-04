import { main } from "./exercise-2.js";

const consoleLog = console.log;

afterEach(() => {
  console.log = consoleLog;
});

describe("Exercise 2", () => {
  test("main should catch all internal exceptions instead of throwing them", () => {
    expect(() => main()).not.toThrow();
  });

  test("it should log the error message to the console", () => {
    console.log = jest.fn();
    main();
    expect(console.log).toHaveBeenCalledWith("Error thrown from thisMightFail");
  });
});
