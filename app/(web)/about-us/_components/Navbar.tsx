"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

  const handleLinkClick = () => setOpen(false);

  return (
    <div className="w-full shadow-md bg-white ">
      <div className="container flex h-[84px] items-center justify-between px-4 sm:px-6 lg:px-0 mx-auto  ">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image src="/assets/logo.png" alt="Valoura Logo" width={1000} height={1000} className=" w-[120px] md:w-[180px] h-[56px] object-contain" />
        </Link>

        {/* Desktop Navigation (center aligned) */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[18px] font-medium text-[#131313] transition-colors hover:text-[#F5B344]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button className="text-white text-base font-bold bg-[#F5B547] rounded-[8px] h-[48px] hover:bg-[#e6a93c]">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-white">
            <SheetHeader>
              <SheetTitle className="text-left text-2xl font-bold text-gray-900">Valoura</SheetTitle>
            </SheetHeader>

            <nav className="mt-8 flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Button */}
            <div className="mt-6 lg:hidden">
              <Button className="w-full h-[48px] bg-[#F5B547] text-white font-bold rounded-[8px] hover:bg-[#e6a93c]">
                Book Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
