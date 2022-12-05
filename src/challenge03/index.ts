export default function distributeGifts (packOfGifts: String[], reindeers: String[]): number {
  const packOfGiftsWeight: number = packOfGifts.reduce((totalWeight, gift) => totalWeight + gift.length, 0)
  const reindeersSupportedWeight: number = reindeers.reduce((totalSupportedWeight, reindeer) => totalSupportedWeight + reindeer.length * 2, 0)

  return Math.floor(reindeersSupportedWeight / packOfGiftsWeight)
}
