import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = useMemo(
    () => [
      { month: "1", amount: 2500 },
      { month: "2", amount: 1030 },
      { month: "3", amount: 3000 },
      { month: "4", amount: 4000 },
      { month: "5", amount: 1500 },
      { month: "6", amount: 800 },
      { month: "7", amount: 1200 },
      { month: "8", amount: 500 },
      { month: "9", amount: 3000 },
      { month: "10", amount: 2000 },
      { month: "11", amount: 1500 },
      { month: "12", amount: 3500 },
    ],
    []
  );

  return (
    <div className="border border-gray-200 rounded-lg flex flex-col gap-2 w-full">
      <div className="px-2 py-1 bg-gray-100 rounded-t-lg flex justify-between items-center">
        <p className="font-semibold">Monthly Overview</p>
        <p>
          {new Date().toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}{" "}
        </p>
      </div>
      <ResponsiveContainer width="98%" height={340}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            vertical={true}
            strokeDasharray="3 3"
            stroke="rgba(0,0,0,0.1)"
            horizontal={false}
          />
          <XAxis dataKey="month" tick={{ fill: "rgba(0,0,0,0.5)" }} stroke="" />
          <YAxis tick={{ fill: "rgba(0,0,0,0.5)" }} stroke="" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth={1}
            dot={{ fill: "#000", r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
