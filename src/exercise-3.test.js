import { thisMightFail } from "./exercise-3.util";
import { main } from "./exercise-3.js";

jest.mock("./exercise-3.util");

describe("Exercise 3", () => {
  test("It should return the value if it succeeds immediately", () => {
    const testReturnValue = "TEST_RETURN_VALUE";
    thisMightFail.mockImplementation(() => {
      return testReturnValue;
    });
    expect(main()).toEqual(testReturnValue);
  });

  test("It should return the value if it succeeds after 5 retries", () => {
    const testReturnValue = "TEST_RETURN_VALUE";
    let numCalls = 0;
    thisMightFail.mockImplementation(() => {
      ++numCalls;
      if (numCalls == 5) {
        return testReturnValue;
      } else {
        throw new Error();
      }
    });
    expect(main()).toEqual(testReturnValue);
  });

  test("It should throw an Error if thisMightFail continues to fail", () => {
    thisMightFail.mockImplementation(() => {
      throw new Error();
    });
    expect(() => main()).toThrow(new Error("Number retries exceeded"));
  });
});
