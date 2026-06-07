"use client";

import { usePathname } from "next/navigation";
import { getDashboardPageTitle } from "./dashboard-navigation";

export default function Header() {
  const pathname = usePathname();
  const title = getDashboardPageTitle(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex h-[82px] items-center bg-[#FAF6EE] px-6 pl-16 sm:px-8 lg:left-[300px] lg:pl-8">
      <div>
        <h1 className="!text-2xl font-semibold leading-tight text-[#CD9B46] sm:text-lg">
          {title}
        </h1>
        <p className="mt-1 !text-[16px] leading-none text-[#6F6A62] sm:text-[10px]">
          Welcome back! Here&apos;s what&apos;s happening in valoura travel today.
        </p>
      </div>
    </header>
  );
}
