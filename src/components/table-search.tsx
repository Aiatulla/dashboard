import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="flex items-center rounded-full gap-2 ring-[1.5px] ring-gray-300 px-2">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        placeholder="Search from table..."
        type="text"
        className="bg-transparent outline-none w-[200px]"
      />
    </div>
  );
};

export default TableSearch;
