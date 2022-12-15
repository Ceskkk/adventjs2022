export function getOptimalPath (path: number[][]): number {
  return path
    .reduceRight((acc, curr) => curr
      .map((num, i) => num + Math.min(acc[i], acc[i + 1])))[0]
}
