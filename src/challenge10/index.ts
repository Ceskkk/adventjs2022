export default function checkJump (heights: number[]): boolean {
  let falling: boolean = false
  let flying: boolean = false

  return heights.every((height, index) => {
    if (falling && heights[index + 1] > height) {
      return false
    }
    if (heights[index + 1] < height) {
      falling = true
    }
    if (heights[index + 1] > height) {
      flying = true
    }
    return true
  }) && falling && flying
}
