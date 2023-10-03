export function isAnyPropertyTrue<T>(
  array: T[] = [],
  mapper: (item: T) => boolean,
): boolean {
  return array
    .map(mapper)
    .filter(Boolean)
    .reduce((a, b) => a ?? b, false);
}

export function fillArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

export function filterFalsy<T>(array: T[]): T[] {
  return array.filter((item) => item);
}

export function filter<T>(array: T[], predicate: Predicate<T>): T[] {
  return array.filter(predicate);
}

export function filterNegate<T>(array: T[], predicate: Predicate<T>): T[] {
  return filter(array, (item) => !predicate(item));
}

export function findFirstMatching<T>(
  array: T[],
  predicate: Predicate<T>,
  defaultValue?: T,
): T | undefined {
  return array.find(predicate) ?? defaultValue;
}

export function getHeadN<T>(array: T[], limit: number = 0): T[] {
  return array.slice(0, limit);
}

export function getTailN<T>(array: T[], limit: number = 0): T[] {
  if (array.length > limit) {
    return array.slice(-limit);
  }
  return array;
}  

// TODO: To be moved to Monad Utils
type Predicate<T> = (item: T) => boolean;
