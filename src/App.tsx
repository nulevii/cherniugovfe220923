/* eslint-disable */
// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";
import { DataInterface } from './data-interface';


const Chart = ({ children, height, width }) => {
  return (
    <svg className='chart' viewBox={`0 0 ${width} ${height}`} height={height} width={width}>
      {children}
    </svg>
  );
};

const Bar = ({ x, y, height, width, data, fullWidth }) => {
  console.log(fullWidth, width, x)
  return (
    <>
      <g className="bar-group">
        <text
          className="name-label"
          x="100"
          y={y + height/2+5}
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
          x={x+ width}
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
          color="black"
        >
          {data.time}
        </text>
      </g>
    </>
  );

};


const BarChart = ({}) =>{
  const [windowWidth, setWindowWidth] = useState(0)

  const resizeChart = () => {
          if (window.innerWidth > 2880) {
            setWindowWidth( 2880 - 20);
          }
          setWindowWidth(window.innerWidth - 20);
  }

  useEffect(() => {
    setWindowWidth(resizeChart());
        window.addEventListener(
          "resize",resizeChart

        );
  },[])
  const barHeight = 30
  const barMargin = 15
  const height = data.length* (barHeight + barMargin)
  const totalTime = data.reduce((acc, element) => (acc+=element.time), 0);


        let previousBarWidth = 0;
return (
  <Chart height={height} width={windowWidth}>
    {data.map((datum, index) => {

      if (index > 0){

      previousBarWidth += ((windowWidth - 120) / totalTime) * data[index - 1].time;
      }
      return (
        <>
          <Bar
            key={datum.name}
            y={index * (barHeight + barMargin)}
            x={previousBarWidth+ 120}
            width={((windowWidth-120) / totalTime) * datum.time}
            height={barHeight}
            data={datum}
            fullWidth={windowWidth}
          />
        </>
      );})}
  </Chart>
);
 }
const App: React.FC = () => {
  return (
      <section className='chart-section'>
      <h1 className='chart-sign'>SPENT TIME (SECONDS)</h1>
      <BarChart />
      </section>
  );
};

export default App;
