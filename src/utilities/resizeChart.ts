export const resizeChart = (): number => {
  if (window.innerWidth > 2880) {
    return (2880 - 30)
  }
  if (window.innerWidth - 30 < 0) {
    return 0
  }
  return window.innerWidth - 30
}
