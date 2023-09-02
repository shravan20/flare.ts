export function isAnyPropertyTrue<T>(
  collection: T[],
  mapper: (item: T) => boolean | null | undefined,
): boolean {
  return collection
    .map(mapper)
    .filter(Boolean)
    .reduce((a, b) => a ?? b, false);
}
