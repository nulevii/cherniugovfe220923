/* eslint-disable */
// @ts-nocheck
import React from "react";
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

const Bar = ({ x, y, height, width }) => {
  return <rect x={x} y={y} height={height} width={width} />;
};


const BarChart = ({}) =>{
  const barHeight = 30
  const barMargin = 0
  const height = data.length* (barHeight + barMargin)
  const totalTime = data.reduce((acc, element) => (acc+=element.time), 0);
  const width = window.innerWidth;

        let preBarWidth = 0;
return (
  <Chart height={height} width={width}>
    {data.map((datum, index) => {

      if (index > 0){

      preBarWidth += width / totalTime * data[index - 1].time;
      }
      return (
        <>
          <Bar
            key={datum.name}
            y={index * (barHeight + barMargin)}
            x={preBarWidth}
            width={(width / totalTime) * datum.time}
            height={barHeight}
          />
        </>
      );})}
  </Chart>
);
 }
const App: React.FC = () => {
  // const [chartValues, setChartvalues] = useState([])
  return (
    <>
      <h1>SPENT TIME (SECONDS)</h1>
      <BarChart />
    </>
  );
};

export default App;
