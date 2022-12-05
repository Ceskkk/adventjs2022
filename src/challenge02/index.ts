export default function countHours (year: number, holidays: string[]): number {
  return holidays.map((date) => {
    return new Date(`${year}/${date}`).getDay()
  }).filter((date) => date > 0 && date < 6).length * 2
}
