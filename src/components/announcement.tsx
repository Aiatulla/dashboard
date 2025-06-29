const Announcement = () => {
  return (
    <div className=" rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg ">Announcements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>
      <div className="mt-2 gap-4 flex flex-col">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">Lorem</h1>
            <span className="text-gray-300 text-xs bg-white rounded-md p-1">
              2025-02-24
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            officia cumque?
          </p>
        </div>
        <div className="bg-lamePurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">Lorem</h1>
            <span className="text-gray-300 text-xs bg-white rounded-md p-1">
              2025-02-24
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            officia cumque?
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">Lorem</h1>
            <span className="text-gray-300 text-xs bg-white rounded-md p-1">
              2025-02-24
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            officia cumque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
