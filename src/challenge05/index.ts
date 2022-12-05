export default function getMaxGifts (giftsCities: number[], maxGifts: number, maxCities: number): number {
  let bestSolution: number = 0

  function search (currentCity: number, remainingGifts: number, visitedCities: number[]): void {
    if (currentCity === giftsCities.length || remainingGifts === 0) {
      if (visitedCities.length <= maxCities) {
        bestSolution = Math.max(bestSolution, visitedCities.reduce((a, b) => a + b, 0))
      }
      return
    }

    if (giftsCities[currentCity] <= remainingGifts) {
      search(currentCity + 1, remainingGifts - giftsCities[currentCity], visitedCities.concat(giftsCities[currentCity]))
    }

    search(currentCity + 1, remainingGifts, visitedCities)
  }

  search(0, maxGifts, [])

  return bestSolution
}
