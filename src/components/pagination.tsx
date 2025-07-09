const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-4 text-gray-500">
      <button
        disabled={true}
        className="py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-100 text-xs font-semibold disabled:hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm text-sm bg-lamaSky">1</button>
        <button className="px-2 rounded-sm text-sm hover:bg-blue-100">3</button>
        <button className="px-2 rounded-sm text-sm hover:bg-blue-100">2</button>
        ...
        <button className="px-2 rounded-sm text-sm hover:bg-blue-100">
          10
        </button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-100 text-xs font-semibold disabled:hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
