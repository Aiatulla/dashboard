import TableSearch from "@/components/table-search";
import Image from "next/image";

const TeachersListPage = () => {
  return (
    <div className="bg-white p-4 rounded flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold hidden md:block">All Teachers</h1>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex self-end gap-2">
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex items-center justify-center">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex items-center justify-center">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex items-center justify-center">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersListPage;
