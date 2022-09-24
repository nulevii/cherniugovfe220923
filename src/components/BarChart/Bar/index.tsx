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
  const sideBarOneWidth = x - 120 < 0 ? 0 : x - 120
  const sideBarOneY = y + height / 2 + 5
  const sideBarOneX = 120
  const sideBarTwoWidth = fullWidth - width - x < 0 ? 0 : fullWidth - width - x
  const sideBarTwoY = y + height / 2 + 4

  const nameLabelX = 100
  const valueLabelX = x + width / 2
  return (
    <>
      <g className="bar-group">
        <text
          className="name-label"
          x={nameLabelX}
          y={sideBarOneY}
          alignmentBaseline="middle"
        >
          {data.name}
        </text>
        <rect
          className="side-bar"
          x={sideBarOneX}
          y={y}
          height={height}
          width={sideBarOneWidth}
        />
        ;
        <rect className="main-bar" x={x} y={y} height={height} width={width} />;
        <rect
          className="side-bar"
          x={x + width}
          y={y}
          height={height}
          width={sideBarTwoWidth}
        />
        ;
        <text
          width={width}
          height={height}
          className="value-label"
          x={valueLabelX}
          y={sideBarTwoY}
        >
          {data.time}
        </text>
      </g>
    </>
  )
}

export default Bar
