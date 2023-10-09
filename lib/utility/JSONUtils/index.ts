type JSONValue = string | number | boolean | { [x: string]: JSONValue } | JSONValue[];

export function compareJSONObject<T extends JSONValue>(obj1: T, obj2: T): any {
  const result: any = {};

  function compareNestedObjects(obj1: JSONValue, obj2: JSONValue, key: string): void {
    const nestedDiff = compareJSONObject(obj1, obj2);
    if (Object.keys(nestedDiff).length > 0) {
      result[key] = {
        status: "modified",
        nested: nestedDiff,
      };
    }
  }

  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
        result[key] = {
          status: "deleted",
          value1: obj1[key],
        };
      } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        compareNestedObjects(obj1[key] as JSONValue, obj2[key] as JSONValue, key);
      } else if (obj1[key] !== obj2[key]) {
        result[key] = {
          status: "modified",
          value1: obj1[key],
          value2: obj2[key],
        };
      }
    }
  }

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key) && !Object.prototype.hasOwnProperty.call(obj1, key)) {
      result[key] = {
        status: "added",
        value2: obj2[key],
      };
    }
  }

  return result;
}
