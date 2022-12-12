export default function countTime (leds: number[]): number {
  const lowLeds = leds
    .join('')
    .split('1')
    .map((led) => led.length)
  lowLeds[0] += Number(lowLeds.at(-1))
  const sortLed = lowLeds.sort((a, b) => b - a)
  return sortLed[0] * 7
}
