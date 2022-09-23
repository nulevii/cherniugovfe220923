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
  const barWidth = 20
  const barMargin = 0
  const height = data.length* (barWidth + barMargin)
const greatestValue = (values) =>
  values.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity);
const width = greatestValue(data.map((datum) => datum.time));

return (
  <Chart height={height} width={width}>
    {data.map((datum, index) => (
      <Bar
        key={datum.name}
        y={index * (barWidth + barMargin)}
        x={0}
        width={datum.time}
        height={barWidth}
      />
    ))}
  </Chart>
);
 }
const App: React.FC = () => {
  // const [chartValues, setChartvalues] = useState([])
  return <BarChart />;
};

export default App;
