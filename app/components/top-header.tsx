"use client";

import { FiPhone } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import Logo from "./logo";

export default function TopHeader() {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="shrink-0">
            <div className="scale-75 sm:scale-90 md:scale-100 origin-left">
              <Logo height={40} />
            </div>
          </div>

          {/* Right side: Language and Contact */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            {/* Language Selector */}
            <div className="hidden sm:flex items-center gap-2 text-gray-700">
              <HiOutlineGlobeAlt className="w-5 h-5" />
              <span className="text-sm font-medium">Español</span>
            </div>

            {/* Contact Button */}
            <a
              href="tel:+5255555622707"
              className="flex items-center gap-2 bg-[#05164d] text-white px-3 sm:px-4 lg:px-6 py-2.5 rounded-lg hover:bg-[#040f3a] transition-colors duration-200 font-medium text-xs sm:text-sm shrink-0"
            >
              <FiPhone className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Para reservar </span>
              <span className="hidden md:inline">+52 55 5562 2707</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

