import { resizeChart } from '../utilities/resizeChart'

describe('resizeChart', () => {
  it('should work correctly', () => {
    const updatedWidth = resizeChart()
    expect(updatedWidth >= 0).toBeTruthy()
  })
})
