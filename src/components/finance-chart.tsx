"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
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

const data = [
  {
    name: "Jan",
    income: 4000,
    expence: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expence: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expence: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expence: 3908,
  },
  {
    name: "May",
    income: 1890,
    expence: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expence: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expence: 4300,
  },
  {
    name: "Aug",
    income: 1890,
    expence: 4800,
  },
  {
    name: "Sep",
    income: 2390,
    expence: 3800,
  },
  {
    name: "Oct",
    income: 3490,
    expence: 4300,
  },
  {
    name: "Nov",
    income: 1890,
    expence: 4800,
  },
  {
    name: "Dec",
    income: 2390,
    expence: 3800,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-md font-semibold">Finance</h1>
        <Image src="/moreDark.png" height={20} width={20} alt="" />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "20px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expence"
            stroke="#82ca9d"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* BOTTOM */}
    </div>
  );
};

export default FinanceChart;
