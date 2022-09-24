// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { data } from '../../data'
import Bar from './Bar'
import Chart from './Chart'
import { DataInterface } from '../../data-interface'

const BarChart: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [chartValues, setChartValues] = useState(data)

  const resizeChart = (): void => {
    if (window.innerWidth > 2880) {
      setWindowWidth(2880 - 20)
    }
    setWindowWidth(window.innerWidth - 20)
  }

  const generateNewData: DataInterface = (DataArray) => {
    const newData = DataArray.map(dataElement => {
      const randomNumber = (Math.floor(Math.random() * 100) + 1) / 10
      const newDataElement = { ...dataElement, time: randomNumber }
      return newDataElement
    })

    setChartValues(newData)
  }

  useEffect(() => {
    resizeChart()
    window.addEventListener('resize', resizeChart)

    const intervalId = setInterval(() => {
      generateNewData(data)
    }, 31800)
    return () => {
      window.removeEventListener('resize', resizeChart)
      clearInterval(intervalId)
    }
  }, [])
  const barHeight = 30
  const barMargin = 15
  const height = chartValues.length * (barHeight + barMargin)
  const totalTime = chartValues.reduce((acc, element) => (acc += element.time), 0)

  let previousBarWidth = 0
  return (
    <>
      <Chart height={height} width={windowWidth}>
        {chartValues.map((datum, index) => {
          if (index > 0) {
            previousBarWidth +=
              ((windowWidth - 120) / totalTime) * chartValues[index - 1].time
          }
          return (
            <>
              <Bar
                key={datum.name}
                y={index * (barHeight + barMargin)}
                x={previousBarWidth + 120}
                width={((windowWidth - 120) / totalTime) * datum.time}
                height={barHeight}
                data={datum}
                fullWidth={windowWidth}
              />
            </>
          )
        })}
      </Chart>
      <button
      onClick={ () => {
        generateNewData(data)
      }}
      className='update-button'
       type='button'>
        Update data
      </button>
    </>
  )
}

export default BarChart
