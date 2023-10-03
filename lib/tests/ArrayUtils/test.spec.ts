import { expect } from "chai";
import {
  fillArray,
  filter,
  filterFalsy,
  filterNegate,
} from "../../utility/ArrayUtils/index";

describe("Sample Test Suite", () => {
  it("Sample Test Case-1", () => {
    const value = true;
    expect(value).to.equal(true);
  });
});

describe("fillArray", () => {
  it("should create an array of the specified length filled with the specified value", () => {
    const result = fillArray(5, "test");

    expect(result).to.be.an("array");
    expect(result).to.have.lengthOf(5);
    expect(result.every((v) => v === "test")).to.equal(true);
  });
});

describe("filterFalsy", () => {
  it("should filter out falsy values", () => {
    const inputList: Array<number | null | undefined | string> = [
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
    expect(result).to.be.an("array");
    expect(result).to.have.lengthOf(0);
  });
});

describe("Filter Functions", () => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  it("should filter even numbers", () => {
    const isEven = (num: number): boolean => num % 2 === 0;
    const evenNumbers = filter(numbers, isEven);
    expect(evenNumbers).to.deep.equal([2, 4]);
  });

  it("should filterNegate even numbers to get odd numbers", () => {
    const isEven = (num: number): boolean => num % 2 === 0;
    const oddNumbers = filterNegate(numbers, isEven);
    expect(oddNumbers).to.deep.equal([1, 3, 5]);
  });
});
