import { expect } from "chai";
import {
  fillArray,
  filter,
  filterFalsy,
  filterNegate,
  findFirstMatching,
  getHeadN,
  getTailN,
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

describe("findFirstMatching", () => {
  const list = [1, 2, 3, 4, 5];

  it("should find the first matching element", () => {
    const predicate = (item: number): boolean => item % 2 === 0;
    const result = findFirstMatching(list, predicate);
    expect(result).to.equal(2);
  });

  it("should return undefined if no match is found", () => {
    const predicate = (item: number): boolean => item > 10;
    const result = findFirstMatching(list, predicate);
    expect(result).to.equal(undefined);
  });

  it("should return the default value if no match is found", () => {
    const predicate = (item: number): boolean => item > 10;
    const defaultValue = -1;
    const result = findFirstMatching(list, predicate, defaultValue);
    expect(result).to.equal(defaultValue);
  });
});

describe("getTopN", () => {
  const sampleArray = [10, 20, 30, 40, 50];

  it("should take the first N elements from the array", () => {
    const result = getHeadN(sampleArray, 3);
    expect(result).to.deep.equal([10, 20, 30]);
  });

  it("should take the first element if N is 1", () => {
    const result = getHeadN(sampleArray, 1);
    expect(result).to.deep.equal([10]);
  });

  it("should take an empty array if N is 0", () => {
    const result = getHeadN(sampleArray, 0);
    expect(result).to.deep.equal([]);
  });

  it("should take the entire array if N is greater than the array length", () => {
    const result = getHeadN(sampleArray, 10);
    expect(result).to.deep.equal(sampleArray);
  });
});

describe("getTailN", () => {
  const sampleArray = [10, 20, 30, 40, 50];

  it("should retrieve the last N elements from the array", () => {
    const result = getTailN(sampleArray, 3);
    expect(result).to.deep.equal([30, 40, 50]);
  });

  it("should retrieve the last element if N is 1", () => {
    const result = getTailN(sampleArray, 1);
    expect(result).to.deep.equal([50]);
  });

  it("should retrieve an empty array if N is 0", () => {
    const result = getTailN(sampleArray, 0);
    expect(result).to.deep.equal([]);
  });

  it("should retrieve the entire array if N is greater than the array length", () => {
    const result = getTailN(sampleArray, 10);
    expect(result).to.deep.equal(sampleArray);
  });
});
