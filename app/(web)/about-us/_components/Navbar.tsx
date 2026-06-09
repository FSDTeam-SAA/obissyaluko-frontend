"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, User2, LogOut, LayoutDashboard } from "lucide-react";
import { signOut } from "next-auth/react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Visa Services", href: "/visa-services" },
  { name: "Study Abroad", href: "/study-abroad" },
  { name: "Tours", href: "/tours" },
  { name: "Consultation", href: "/consultation" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact ", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => setOpen(false);

  const handleLogoutConfirm = async () => {
    setIsLoggingOut(true);
    await signOut({ redirect: false });
    setLogoutModal(false);
    setDropdownOpen(false);
    router.push("/");
    setIsLoggingOut(false);
  };

  const isActiveLink = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="w-full shadow-md bg-white sticky z-50 top-0">
        <div className="container flex h-[84px] items-center justify-between px-4 sm:px-6 lg:px-0 mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Valoura Logo"
              width={1000}
              height={1000}
              className="w-[120px] md:w-[180px] h-[56px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative pb-2 text-[18px] font-medium text-[#131313] transition-colors hover:text-[#12382B] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[#12382B] after:transition-transform",
                    isActive && "text-[#12382B] after:scale-x-100",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                {/* User Icon with Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="border-2 p-1 rounded-full border-[#424242] hover:border-[#12382B] transition-colors"
                  >
                    <User2 className="h-6 w-6 text-[#424242]" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 top-12 w-48 bg-white rounded-[10px] shadow-lg border border-gray-100 overflow-hidden z-50">
                      <Link
                        href="/user-dashbord"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#131313] hover:bg-gray-50 transition-colors"
                      >
                        <LayoutDashboard className="h-4 w-4 text-[#424242]" />
                        Profile
                      </Link>
                      <div className="h-[1px] bg-gray-100" />
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          setLogoutModal(true);
                        }}
                        className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
                <Link href="/consultation">
                <Button className="text-white text-base font-bold bg-[#F5B547] rounded-[8px] h-[48px] hover:bg-[#e6a93c]">
                  Book Consultation
                </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button className="text-white text-base font-bold bg-[#F5B547] rounded-[8px] h-[48px] hover:bg-[#e6a93c]">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="text-white text-base font-bold bg-[#F5B547] rounded-[8px] h-[48px] hover:bg-[#e6a93c]">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:bg-black/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-white">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl font-bold text-gray-900">
                  Valoura
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = isActiveLink(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "w-fit border-b-2 border-transparent px-1 py-3 text-lg font-medium text-gray-900 transition-colors hover:text-[#12382B]",
                        isActive && "border-[#12382B] text-[#12382B]",
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Bottom */}
              <div className="mt-6 flex flex-col gap-3">
                {isAuthenticated ? (
                  <>
                    <Link href="/consultation">
                    <Button className="w-full h-[48px] bg-[#F5B547] text-white font-bold rounded-[8px] hover:bg-[#e6a93c]">
                      Book Consultation
                    </Button>
                    </Link>
                    <Link href="/user-dashbord" onClick={handleLinkClick}>
                      <Button
                        variant="outline"
                        className="w-full h-[48px] font-bold rounded-[8px]"
                      >
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full h-[48px] font-bold rounded-[8px] text-red-500 border-red-200 hover:bg-red-50"
                      onClick={() => {
                        setOpen(false);
                        setLogoutModal(true);
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={handleLinkClick}>
                      <Button className="w-full h-[48px] bg-[#F5B547] text-white font-bold rounded-[8px] hover:bg-[#e6a93c]">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={handleLinkClick}>
                      <Button className="w-full h-[48px] bg-[#F5B547] text-white font-bold rounded-[8px] hover:bg-[#e6a93c]">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {logoutModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-red-100 p-3 rounded-full">
                <LogOut className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-lg font-bold text-[#131313]">Logout?</h2>
              <p className="text-sm text-gray-500">
                Are you sure you want to logout from your account?
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                className="flex-1 h-[44px] rounded-[8px] font-semibold"
                onClick={() => setLogoutModal(false)}
                disabled={isLoggingOut}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 h-[44px] rounded-[8px] font-semibold bg-red-500 hover:bg-red-600 text-white"
                onClick={handleLogoutConfirm}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}