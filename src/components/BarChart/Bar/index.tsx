import React from 'react'
import { DataInterface } from '../../../data-interface'
interface BarProps {
  x: number
  y: number
  height: number
  width: number
  data: DataInterface
  fullWidth: number

}
const Bar: React.FC<BarProps> = ({ x, y, height, width, data, fullWidth }) => {
  return (
    <>
      <g className="bar-group">
        <text
          className="name-label"
          x="100"
          y={y + height / 2 + 5}
          alignmentBaseline="middle"
        >
          {data.name}
        </text>
        <rect
          className="side-bar"
          x={120}
          y={y}
          height={height}
          width={x - 120}
        />
        ;
        <rect className="main-bar" x={x} y={y} height={height} width={width} />;
        <rect
          className="side-bar"
          x={x + width}
          y={y}
          height={height}
          width={fullWidth - width - x}
        />
        ;
        <text
          width={width}
          height={height}
          className="value-label"
          x={x + width / 2}
          y={y + height / 2 + 4}
        >
          {data.time}
        </text>
      </g>
    </>
  )
}

export default Bar
