import { generateNewData } from '../utilities/generateNewData'
import { CHART_DATA } from '../data'

describe('generateNewData', () => {
  it('should work correctly', () => {
    const updatedData = generateNewData(CHART_DATA)

    expect(updatedData).not.toEqual(CHART_DATA)

    updatedData.forEach(({ time }) => {
      expect(time < 10 && time > 0).toBeTruthy()
    })

    const newUpdatedData = generateNewData(updatedData)

    expect(newUpdatedData).not.toEqual(updatedData)
  })
})
