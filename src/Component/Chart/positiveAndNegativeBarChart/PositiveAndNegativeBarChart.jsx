import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: -3000,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: -2000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: -1890,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    amt: 2100,
  },
];

const PositiveAndNegativeBarChart = () => {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid color="#DEDEE7" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <ReferenceLine y={0} stroke="#000" /> */}
        <Bar radius={[10, 10, 0, 0]} dataKey="uv">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.uv < 0 ? "#F05D5E" : "#4FB5C9"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PositiveAndNegativeBarChart;
