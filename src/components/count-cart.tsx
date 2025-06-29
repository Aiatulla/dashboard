"use client";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";
const data = [
  {
    name: "Total",
    count: 90,
    fill: "white",
  },
  {
    name: "Boys",
    count: 54,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 36,
    fill: "#FAE27C",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg fong-semibold">Students</h1>
        <Image src="/moreDark.png" height={20} width={20} alt="" />
      </div>
      {/* CHART */}
      <div className="w-full h-[70%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          height={50}
          width={50}
          alt=""
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex gap-16">
        <div className="flex flex-col gap-1">
          <div className="rounded-full w-5 h-5 bg-lamaSky" />
          <h1 className="font-bold">1,201</h1>
          <h1 className="text-xs text-gray-300">Boys [55%]</h1>
        </div>
        <div className="flex flex-col gap-1">
          <div className="rounded-full w-5 h-5 bg-lamaYellow" />
          <h1 className="font-bold">1,201</h1>
          <h1 className="text-xs text-gray-300">Girls [45%]</h1>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
