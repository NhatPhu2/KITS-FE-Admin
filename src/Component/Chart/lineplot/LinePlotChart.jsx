import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
const data = [
  {
    name: "Page A",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    pv: 4300,
    amt: 2100,
  },
];
const MyResponsiveContainerStyled = styled(ResponsiveContainer)`
  background-color: white;
`
const LinePlotChart = () => {
  return (
    <MyResponsiveContainerStyled minHeight={500} width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset={`0%`} stopColor="#9747FF" />
          <stop offset={`100%`} stopColor="#14F4C9" />
        </linearGradient>
      </defs>
        <CartesianGrid vertical={false} strokeDasharray="0 0" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="pv" strokeWidth={3} type="monotone" stroke="url(#colorUv)" dot={false} />
      </LineChart>
    </MyResponsiveContainerStyled>
  );
};
export default LinePlotChart;
