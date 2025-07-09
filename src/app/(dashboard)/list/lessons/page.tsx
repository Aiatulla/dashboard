import Pagination from "@/components/pagination";
import Table from "@/components/table";
import TableSearch from "@/components/table-search";
import { lessonsData, role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type LessonsData = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const LessonsListPage = () => {
  const renderRow = (item: LessonsData) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamePurpleLight"
    >
      <td className="flex gap-2 items-center p-3">{item.subject}</td>
      <td className="hidden md:table-cell ">{item.class}</td>
      <td className="hidden md:table-cell ">{item.teacher}</td>
      <td>
        <div className="flex gap-2 items-center">
          <Link href={`list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" alt="" width={16} height={16} />
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
        <h1 className="font-semibold hidden md:block">All Classes</h1>
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
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      <Pagination />
    </div>
  );
};

export default LessonsListPage;
