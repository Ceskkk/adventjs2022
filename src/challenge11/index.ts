export default function getCompleted (part: string, total: string): string {
  const mcd = (a: number, b: number): number => b === 0 ? a : mcd(b, a % b)

  const partToSec = +part.split(':').reduce((a, b, i) => {
    return +a + (+b * Math.pow(60, Math.abs(i - 2)))
  }, 0)

  const totalToSec = +total.split(':').reduce((a, b, i) => {
    return +a + (+b * Math.pow(60, Math.abs(i - 2)))
  }, 0)

  const denom = mcd(partToSec, totalToSec)

  return `${partToSec / denom}/${totalToSec / denom}`
}
