import { DataInterface } from '../data-interface'

export const generateNewData = (
  dataArray: DataInterface[]
): DataInterface[] => {
  return dataArray.map((element) => {
    const randomNumber = (Math.floor(Math.random() * 100) + 1) / 10
    return { ...element, time: randomNumber }
  })
}
