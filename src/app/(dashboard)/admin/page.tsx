import CountChart from "@/components/count-cart";
import UserCard from "@/components/user-card";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Left */}
      <div className=" w-2/3 flex flex-col gap-8">
        {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[350px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[350px]"></div>
        </div>
        {/* BOTTOM CHARTS */}
        <div></div>
      </div>
      {/* Right */}
      <div className="w-1/3">right</div>
    </div>
  );
};

export default AdminPage;
