export default function wrapping (gifts: string[]): string[] {
  return gifts.map((gift) => {
    const wrapper = '*'.repeat(gift.length + 2)
    return `${wrapper}\n*${gift}*\n${wrapper}`
  })
}
