import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = useMemo(
    () => [
      { month: "January", amount: 2500 },
      { month: "February", amount: 1030 },
      { month: "March", amount: 3000 },
      { month: "April", amount: 4000 },
      { month: "May", amount: 8000 },
      { month: "June", amount: 1190 },
      { month: "July", amount: 200 },
      { month: "August", amount: 200 },
      { month: "September", amount: 300 },
      { month: "October", amount: 5000 },
      { month: "November", amount: 20 },
      { month: "December", amount: 3500 },
    ],
    []
  );

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        paddingRight: "5px",
        paddingLeft: "5px",
        paddingTop: "10px",
        height: "430px", // Explicit height
        width: "100%",
        borderRadius: "8px",
      }}
    >
      <p className="flex justify-center w-fit mx-auto px-8 mb-4 font-semibold">
        Overview
      </p>
      <ResponsiveContainer width="90%" height={400}>
        {" "}
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" angle={-45} textAnchor="end" height={60} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="steelblue"
            strokeWidth={2}
            dot={{ r: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
