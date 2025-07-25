import Announcement from "@/components/announcement";
import BigCalendar from "@/components/big-calendar";

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-lg font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        <Announcement />
      </div>
    </div>
  );
};

export default ParentPage;
