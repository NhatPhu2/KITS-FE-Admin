import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
const data = [
  {
    name: '18-24',
    uv: 24,
    pv: 2400,
    fill: '#F3BA2F',
  },
  {
    name: '25-29',
    uv: 25,
    pv: 4567,
    fill: '#54C2C1',
  },
  {
    name: '30-34',
    uv: 30,
    pv: 1398,
    fill: '#0F0F3F',
  },
  {
    name: '35-39',
    uv: 39,
    pv: 9800,
    fill: '#9020E9',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};
const MyResponsiveContainer = styled(ResponsiveContainer)`
  background-color: white;
`
const RadialChart = () =>{
    return (
      <MyResponsiveContainer minHeight={500} width="100%" height="100%">
        <RadialBarChart  endAngle={180} startAngle={600} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={1000}
            background
            clockWise
            dataKey="pv"
          />
          <Legend iconType='circle' iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </MyResponsiveContainer>
    );
}
export default RadialChart
