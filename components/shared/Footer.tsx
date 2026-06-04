import Image from "next/image";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat pt-[280px] pb-6 px-4"
      style={{
        backgroundImage: "url('/assets/plane.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 " />

      <div className="relative z-10 container mx-auto">
        <div className="bg-[#FAF6EE] rounded-xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-[120px] md:w-[180px] h-[56px] object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-500 text-sm">
                    Toll free customer care
                  </p>
                  <h4 className="font-semibold text-[#18392B]">
                    +000000000000
                  </h4>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Need live support?</p>
                  <h4 className="font-semibold text-[#18392B]">
                    asdf@gmail.com
                  </h4>
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-4">Follow us on social media</p>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-[#18392B] flex items-center justify-center text-[#18392B] hover:bg-[#18392B] hover:text-white transition-all duration-300"
                  >
                    <Facebook size={18} />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-[#18392B] flex items-center justify-center text-[#18392B] hover:bg-[#18392B] hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-[#18392B] flex items-center justify-center text-[#18392B] hover:bg-[#18392B] hover:text-white transition-all duration-300"
                  >
                    <Twitter size={18} />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-[#18392B] flex items-center justify-center text-[#18392B] hover:bg-[#18392B] hover:text-white transition-all duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h3 className="font-semibold text-[#18392B] mb-3">
                  Get Updates and more
                </h3>

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full h-12 rounded-lg border border-gray-200 bg-white px-4 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Company */}
                <div>
                  <h4 className="font-semibold text-[#18392B] mb-4">Company</h4>

                  <ul className="space-y-3 text-gray-600">
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Blogs</li>
                    <li>Press</li>
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 className="font-semibold text-[#18392B] mb-4">Support</h4>

                  <ul className="space-y-3 text-gray-600">
                    <li>Contact</li>
                    <li>Legal Notice</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Sitemap</li>
                  </ul>
                </div>

                {/* Other Services */}
                <div>
                  <h4 className="font-semibold text-[#18392B] mb-4">
                    Other Services
                  </h4>

                  <ul className="space-y-3 text-gray-600">
                    <li>Tour List</li>
                    <li>Holiday Rental</li>
                    <li>Flight Finder</li>
                    <li>Travel Agents</li>
                    <li>Visa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-300 mt-10 pt-5 text-center text-gray-500">
            @ 2025. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
