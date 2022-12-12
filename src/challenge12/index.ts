export default function selectSleigh (distance: number, sleighs: Sleigh[]): string | null {
  const selected: Sleigh | undefined = sleighs.reverse().find(sleigh => sleigh.consumption * distance <= 20)

  return selected?.name ?? null
}

interface Sleigh {
  name: string
  consumption: number
}
