export default function checkPart (part: string): boolean {
  return [...part].some((_, index) => {
    const newPart = [...part].filter((_, idx) => idx !== index).join('')
    const newPartReversed = [...part].filter((_, idx) => idx !== index).reverse().join('')
    return newPart === newPartReversed
  })
}
