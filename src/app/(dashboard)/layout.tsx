export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen">
        {/* LEFT */}
        <div className="w-[16%] bg-green-200 md:w-[16%] lg:w-[16%] xl:w-[16%]">l</div>
        {/* RIGHT */}
        <div className="w-[84%] bg-blue-200 md:w-[84%] lg:w-[84%] xl:w-[84%]">r</div>
      </div>
    );
  }