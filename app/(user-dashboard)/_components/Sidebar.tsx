"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import {
  dashboardNavigation,
  isDashboardNavActive,
} from "./dashboard-navigation";

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {!isMobileMenuOpen && (
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-[#CD9B46] text-white shadow-lg hover:bg-[#CD9B46] transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "flex h-screen sticky bottom-0 top-0 flex-col bg-[#FAF6EE] z-50 transition-transform duration-300 overflow-auto",
        
          "fixed lg:static",
          "w-[240px] sm:w-[250px] lg:w-[300px]",
       
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
        )}
      >

        <div className="flex items-center justify-center relative px-4 mt-5">
          <Link href="/">
          <div className="flex w-[180px] h-[50px] items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
          </Link>

      
          {isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg text-white hover:bg-slate-600/50 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-3 flex flex-col items-center justify-start px-3 overflow-y-auto mt-10">
          {dashboardNavigation.map((item) => {
            const isActive = isDashboardNavActive(pathname, item);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex w-[90%] mx-auto items-center justify-start gap-2 space-y-1 rounded-[8px] px-3 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-[#CD9B46] text-white"
                    : "text-black hover:bg-[#CD9B46] hover:text-white text-[18px]",
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-200 flex-shrink-0",
                    isActive ? "text-white" : "",
                  )}
                />
                <span
                  className={cn(
                    "font-normal text-sm sm:text-base leading-[120%] transition-colors duration-200",
                    isActive
                      ? "text-white font-medium text-[18px]"
                      : "text-[18px]",
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
