"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavigationMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Página Principal" },
    { href: "/mundo-corporativo", label: "Mundo Corporativo" },
    { href: "/mundo-turistico", label: "Mundo Turístico" },
    { href: "/destinos-destacados", label: "Destinos Destacados" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/sales-partners", label: "Sales Partners" },
    { href: "/contacto", label: "Contáctanos" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-start gap-8 py-2">
          {menuItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 text-sm font-medium whitespace-nowrap py-2 px-3 rounded ${
                  active
                    ? "bg-[#05164d] text-white"
                    : "text-gray-700 hover:text-[#05164d]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-[#05164d] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium">Menú</span>
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-1 pt-2">
                {menuItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`transition-colors duration-200 text-sm font-medium py-3 px-4 rounded ${
                        active
                          ? "bg-[#05164d] text-white"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#05164d]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

