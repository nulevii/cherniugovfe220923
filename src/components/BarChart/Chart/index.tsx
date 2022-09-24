/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/prop-types */
// @ts-nocheck

import React from 'react'
// import { DataIterface } from '../../../data-interface'
interface ChartProps {
  height: number
  width: number
  // children: DataIterface
}

const Chart: Feact.FC<ChartProps> = ({ children, height, width }) => {
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
