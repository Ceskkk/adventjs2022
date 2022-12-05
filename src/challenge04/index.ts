export default function fitsInOneBox (boxes: Box[]): boolean {
  const sortedBoxes: Box[] = boxes.sort((box1, box2) => { return box1.l - box2.l })

  return sortedBoxes.every((_box, i: number) => {
    if (i === sortedBoxes.length - 1) {
      return true
    } else if (sortedBoxes[i].l < sortedBoxes[i + 1].l && sortedBoxes[i].w < sortedBoxes[i + 1].w && sortedBoxes[i].h < sortedBoxes[i + 1].h) {
      return true
    }
    return false
  })
}

interface Box {
  l: number
  w: number
  h: number
}
