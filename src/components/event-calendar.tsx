"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: "2025-04-15",
    description: "Monthly team meeting to discuss project updates.",
  },
  {
    id: 2,
    title: "Product Launch",
    date: "2025-05-20",
    description: "Launch event for the new product line.",
  },
  {
    id: 3,
    title: "Workshop",
    date: "2025-06-05",
    description: "Technical workshop on advanced React patterns.",
  },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="w-full rounded-md bg-white p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg py-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-3 rounded-md border-2  border-gray-200 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.date}</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
