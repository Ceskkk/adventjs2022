export default function createCube (size: number): string {
  return [
    Array
      .from({ length: size }, (_, index) => (
        ' '.repeat(size - index - 1) +
        '/\\'.repeat(index + 1) +
        '_\\'.repeat(size)))
      .join('\n'),
    Array
      .from({ length: size }, (_, index) => (
        ' '.repeat(index) +
        '\\/'.repeat(size - index) +
        '_/'.repeat(size)))
      .join('\n')
  ].join('\n')
}
