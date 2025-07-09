import Pagination from "@/components/pagination";
import Table from "@/components/table";
import TableSearch from "@/components/table-search";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type StudentData = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  phone?: string;
  photo: string;
  class: string;
  address: string;
  grade: number;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Id",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const StudentListPage = () => {
  const renderRow = (item: StudentData) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamePurpleLight"
    >
      <td className="flex gap-2 items-center p-3">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell ">{item.studentId}</td>
      <td className="hidden md:table-cell ">{item.grade}</td>
      <td className="hidden md:table-cell ">{item.phone}</td>
      <td className="hidden md:table-cell ">{item.address}</td>
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
        <h1 className="font-semibold hidden md:block">All Students</h1>
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
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      <Pagination />
    </div>
  );
};

export default StudentListPage;
