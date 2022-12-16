import React from "react";
import {
  AreaChart,
  Area,
  Tooltip
} from "recharts";

const data = [
  {
    name: "2002",
    profit: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2004",
    profit: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "2006",
    profit: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "2008",
    profit: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "2010",
    profit: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "2012",
    profit: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "2014",
    profit: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Areachart() {
  return (
    <AreaChart
      width={480}
      height={220}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 15,
        bottom: 0
      }}
    >
    
    
      <Tooltip />
      <Area type="monotone" dataKey="profit" stroke="rgb(56,43,219)" fill="#8884d8" />
    </AreaChart>
  );
}
