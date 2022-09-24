
import React from 'react'
interface ChartProps {
  height: number
  width: number
  children: React.ReactNode
}

const Chart: React.FC<ChartProps> = ({ children, height, width }) => {
  return (
    <svg
      className="chart"
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
    >
      {children}
    </svg>
  )
}

export default Chart
