"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="header__inner px-4 md:px-12 py-6">
        <div className="flex justify-between items-baseline">
          <div className="header__col">
            <div className="logo">
              <Link
                href="/"
                className="text-white font-serif text-2xl md:text-3xl"
              >
                TWS DESIGNS
              </Link>
            </div>
          </div>
          <div className="header__col hidden md:block">
            <nav>
              <ul className="flex space-x-16 uppercase text-sm ">
                <li className={pathname === "/contact" ? "active" : ""}>
                  <Link
                    href="/contact"
                    className="text-white hover:text-[#683e2a] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className={pathname === "/contact" ? "active" : ""}>
                  <Link
                    href="/contact"
                    className="text-white hover:text-amber-200 transition-colors hover:underline hover:decoration-white hover:decoration-2"
                  >
                    Services
                  </Link>
                </li>
                <li className={pathname === "/contact" ? "active" : ""}>
                  <Link
                    href="/contact"
                    className="text-white hover:text-[#683e2a] transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li className={pathname === "/about" ? "active" : ""}>
                  <Link
                    href="/about"
                    className="text-white hover:text-[#683e2a] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li className={pathname === "/contact" ? "active" : ""}>
                  <Link
                    href="/contact"
                    className="text-white hover:text-[#683e2a] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div className="header__col flex items-center">
            <div className="hidden sm:block logo-mark md:mr-6">
              <Link href="/sister" className="text-[#463cc4] text-3xl">
                TAW INTERIO
              </Link>
            </div>
          </div> */}
          <button
            className="header__hamburger md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-[#683e2a]" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`off-canvas fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="off-canvas__inner p-8">
          <div className="flex justify-between mb-8">
            <div className="logo">
              <Link
                href="/"
                className="text-[#683e2a] font-serif text-2xl md:text-3xl"
              >
                TWS DESIGNS
              </Link>
            </div>
            <button onClick={toggleMobileMenu} aria-label="Close menu">
              <X className="w-6 h-6 text-[#683e2a]" />
            </button>
          </div>
          <nav className="off-canvas__nav">
            <ul className="space-y-6">
              <li className={pathname === "/projects" ? "active" : ""}>
                <Link
                  href="/projects"
                  className="text-[#683e2a] text-2xl hover:text-[#a99115] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className={pathname === "/about" ? "active" : ""}>
                <Link
                  href="/about"
                  className="text-[#683e2a] text-2xl hover:text-[#a99115] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className={pathname === "/contact" ? "active" : ""}>
                <Link
                  href="/contact"
                  className="text-[#683e2a] text-2xl hover:text-[#a99115] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className={pathname === "/sister" ? "active" : ""}>
                <Link
                  href="/sister"
                  className="text-[#683e2a] text-2xl hover:text-[#a99115] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Store
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="off-canvas__footer absolute bottom-0 w-full p-8 bg-black">
          <div className="off-canvas__footer--inner flex justify-end">
            <div className="logo-sister">
              <Link href="/sister" className="text-[#463cc4] text-2xl">
                TWS INTERIO {"-->"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
