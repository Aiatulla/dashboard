import Announcement from "@/components/announcement";
import EventCalendar from "@/components/event-calendar";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-lg font-semibold">Schedule (9B)</h1>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
