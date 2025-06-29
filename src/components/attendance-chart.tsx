"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Mon",
    present: 40,
    absence: 24,
  },
  {
    name: "Tue",
    present: 30,
    absence: 13,
  },
  {
    name: "Wed",
    present: 20,
    absence: 9,
  },
  {
    name: "Thu",
    present: 27,
    absence: 39,
  },
  {
    name: "Fri",
    present: 18,
    absence: 48,
  },
];

const AttandanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-md font-semibold">Attendance</h1>
        <Image src="/moreDark.png" height={20} width={20} alt="" />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="95%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis tick={{ fill: "#d1d5db" }} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Bar
            dataKey="present"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absence"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      {/* BOTTOM */}
    </div>
  );
};

export default AttandanceChart;
