import { expect } from "chai";
import { compareJSONObject } from "../../utility/JSONUtils/index";

describe("compareJSONObjects", () => {
  it("should compare two json objects", () => {
    const obj1 = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
      },
    };

    const obj2 = {
      name: "Jane",
      age: 40,
      email: "jane@example.com",
      address: {
        street: "456 Elm St",
        city: "Another City",
      },
    };
    const result = compareJSONObject(obj1, obj2);
    const expectedResult = {
      address: {
        nested: {
          city: {
            status: "modified",
            value1: "Anytown",
            value2: "Another City",
          },
          street: {
            status: "modified",
            value1: "123 Main St",
            value2: "456 Elm St",
          },
        },
        status: "modified",
      },
      email: {
        status: "added",
        value2: "jane@example.com",
      },
      name: {
        status: "modified",
        value1: "John",
        value2: "Jane",
      },
      age: {
        status: "modified",
        value1: 30,
        value2: 40,
      },
    };
    expect(result).to.deep.equal(expectedResult);
  });
});
