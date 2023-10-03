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
