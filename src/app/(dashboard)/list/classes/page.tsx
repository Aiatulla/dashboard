import Pagination from "@/components/pagination";
import Table from "@/components/table";
import TableSearch from "@/components/table-search";
import { classesData, role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type ClassesData = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassesListPage = () => {
  const renderRow = (item: ClassesData) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamePurpleLight"
    >
      <td className="flex gap-2 items-center p-3">{item.name}</td>
      <td className="hidden md:table-cell ">{item.capacity}</td>
      <td className="hidden md:table-cell ">{item.grade}</td>
      <td className="hidden md:table-cell ">{item.supervisor}</td>
      <td>
        <div className="flex gap-2 items-center">
          <Link href={`list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold hidden md:block">All Classess</h1>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex self-end gap-2">
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex items-center justify-center">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex items-center justify-center">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="bg-lamaYellow rounded-full w-8 h-8 flex items-center justify-center">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      <Pagination />
    </div>
  );
};

export default ClassesListPage;
