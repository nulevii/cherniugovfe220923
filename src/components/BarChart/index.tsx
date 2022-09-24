import React, { useEffect, useState } from 'react'
import { CHART_DATA } from '../../data'
import Bar from './Bar'
import Chart from './Chart'
import { generateNewData } from '../../utilities/generateNewData'
import { resizeChart } from '../../utilities/resizeChart'

const BarChart: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [chartValues, setChartValues] = useState(CHART_DATA)

  useEffect(() => {
    setWindowWidth(resizeChart())
    window.addEventListener('resize', () => {
      setWindowWidth(resizeChart())
    })

    const intervalId = setInterval(() => {
      setChartValues(generateNewData(CHART_DATA))
    }, 31800)
    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(resizeChart())
      })
      clearInterval(intervalId)
    }
  }, [])

  const barHeight = 30
  const barMargin = 15
  const height = chartValues.length * (barHeight + barMargin)
  const totalTime = chartValues.reduce((acc: number, element) => (acc += element.time), 0)

  let previousBarWidth = 0

  return (
    <>
      <Chart height={height} width={windowWidth}>
        {chartValues.map((datum, index) => {
          if (index > 0) {
            previousBarWidth +=
              ((windowWidth - 120) / totalTime) * chartValues[index - 1].time
            if (previousBarWidth <= 0) {
              previousBarWidth = 0
            }
          }
          let width = ((windowWidth - 120) / totalTime) * datum.time
          if (width <= 0) {
            width = 0
          }
          return (
            <Bar
              key={datum.name}
              y={index * (barHeight + barMargin)}
              x={previousBarWidth + 120}
              width={width}
              height={barHeight}
              data={datum}
              fullWidth={windowWidth}
            />
          )
        })}
      </Chart>
      <button
        onClick={() => {
          setChartValues(generateNewData(CHART_DATA))
        }}
        className="update-button"
        type="button"
        data-testid="update-button"
      >
        Update data
      </button>
    </>
  )
}

export default BarChart
