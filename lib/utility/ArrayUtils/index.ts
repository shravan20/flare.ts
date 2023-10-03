export function isAnyPropertyTrue<T>(
  collection: T[] = [],
  mapper: (item: T) => boolean,
): boolean {
  return collection
    .map(mapper)
    .filter(Boolean)
    .reduce((a, b) => a ?? b, false);
}

export function fillArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

export function filterFalsy<T>(list: T[]): T[] {
  return list.filter((item) => item);
}

export function filter<T>(list: T[], predicate: Predicate<T>): T[] {
  return list.filter(predicate);
}

export function filterNegate<T>(list: T[], predicate: Predicate<T>): T[] {
  return filter(list, (item) => !predicate(item));
}

export function findFirstMatching<T>(
  list: T[],
  predicate: Predicate<T>,
  defaultValue?: T,
): T | undefined {
  return list.find(predicate) ?? defaultValue;
}

// TODO: To be moved to Monad Utils
type Predicate<T> = (item: T) => boolean;
