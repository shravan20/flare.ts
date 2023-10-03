import { expect } from "chai";
import { fillArray, filterFalsy } from "../../utility/ArrayUtils/index";

describe("Sample Test Suite", () => {
  it("Sample Test Case-1", () => {
    const value = true;
    expect(value).to.be.true;
  });
});

describe("fillArray", () => {
  it("should create an array of the specified length filled with the specified value", () => {
    const result = fillArray(5, "test");

    expect(result).to.be.an("array");
    expect(result).to.have.lengthOf(5);
    expect(result.every((v) => v === "test")).to.be.true;
  });
});

describe("filterFalsy", () => {
  it("should filter out falsy values", () => {
    const inputList: (number | null | undefined | string)[] = [
      1,
      0,
      null,
      undefined,
      NaN,
      "",
      "hello",
    ];
    const result = filterFalsy(inputList);

    // Only non-falsy values should remain
    expect(result).to.deep.equal([1, "hello"]);
  });

  it("should handle an empty list", () => {
    const inputList: number[] = [];
    const result = filterFalsy(inputList);

    // Empty list, so the result should also be an empty list
    expect(result).to.be.an("array").that.is.empty;
  });
});