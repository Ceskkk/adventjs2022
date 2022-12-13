export default function getFilesToBackup (lastBackup: number, changes: number[][]): number[] {
  return [...new Set(changes
    .filter((c) => c[1] > lastBackup)
    .map((c) => c[0])
    .sort((a, b) => a - b)
  )]
}
