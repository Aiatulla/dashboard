import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/nav-bar";
import Menu from "@/components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* LEFT */}
      <div className="w-[16%] md:w-[16%] lg:w-[16%] xl:w-[16%] overflow-scroll">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 p-4"
        >
          <Image src="/logo.png" height={32} width={32} alt="logo" />
          <span className="hidden lg:block">Dashboard</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[84%]  md:w-[84%] lg:w-[84%] xl:w-[84%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
