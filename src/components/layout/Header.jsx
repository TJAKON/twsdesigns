"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, ArrowBigRight } from "lucide-react";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const services = [
  {
    id: 1,
    name: "Architectural Design",
    description: "Conceptual and detailed architectural planning.",
    link: "/",
    // icon: <YourIconComponent />,
  },
  {
    id: 2,
    name: "Interior Design",
    description: "Creative and functional interior solutions.",
    link: "/",
    // icon: <YourIconComponent />,
  },
  // Add more...
];

const premiumservices = [
  {
    name: "Architectural Plans",
    description:
      "Tailored residential and commercial building plans with precision.",
    href: "/pages/services",
  },
  {
    name: "Planning & Designing",
    description:
      "Comprehensive site planning, project layout, and sanctioned drawings.",
    href: "/pages/planninganddesigningservice",
  },
  {
    name: "Project Management",
    description:
      "From 3D visualizations to commercial and landscape design solutions.",
    href: "/pages/projectmanagementservice",
  },
  {
    name: "Green Building Design",
    description:
      "Eco-conscious architecture with sustainable design principles.",
    href: "/pages/tawgreenservice",
  },
];

const callsToAction = [
  {
    name: "Book Consultation",
    href: "/contact",
    // icon: CalendarIcon,
  },
  {
    name: "Get Quote",
    href: "/quote",
    // icon: CurrencyRupeeIcon,
  },
];

const navigation = [
  { name: "Projects", href: "/pages/projects" },
  { name: "About", href: "/pages/about" },
  { name: "Contact Us", href: "/pages/contact" },
];
const navigationmobile = [
  { name: "home", href: "/" },
  { name: "Projects", href: "/pages/projects" },
  { name: "About", href: "/pages/about" },
  { name: "Contact Us", href: "/pages/contact" },
];

// const callsToAction = [
//   {
//     name: "Contact Us",
//     href: "/contact",
//     icon: ChevronDownIcon, // Or your custom icon
//   },
//   {
//     name: "Book Consultation",
//     href: "/book",
//     icon: ChevronDownIcon,
//   },
// ];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md shadow-lg">
      <div className="header__inner px-4 md:px-12">
        <div className="flex justify-between items-center">
          <div className="header__col py-2 md:py-0">
            <div className="logo f">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo1.png"
                  alt="TAW Designs Logo"
                  className="w-auto h-16 md:h-24"
                />
                <span className="text-md md:text-2xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-tight">
                  TAW <br /> DESIGNS
                </span>
              </Link>
            </div>
          </div>

          <div className="header__col hidden md:block">
            <nav>
              <PopoverGroup className="hidden lg:flex lg:gap-x-8 text-md font-medium">
                <Link href="/" className="text-white uppercase">
                  Home
                </Link>
                <Popover className="relative group">
                  <PopoverButton className="flex items-center gap-x-1 text-white focus:outline-none uppercase">
                    Services
                    <ChevronDownIcon className="h-5 w-5" />
                  </PopoverButton>

                  <PopoverPanel className="absolute top-12 z-10 mt-3 md:w-[40vh] overflow-hidden bg-black/90 backdrop-blur-lg ring-1 shadow-lg ring-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 px-3 py-3">
                      {premiumservices.map((item) => (
                        <div
                          key={item.name}
                          className="flex flex-col items-center justify-center py-2 px-2 bg-white text-black hover:text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-secondary"
                        >
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="text-md font-semibold text-center transition-colors duration-200"
                            >
                              {item.name}
                              <p className="mt-2 text-center text-xs">
                                {item.description}
                              </p>
                            </Link>
                          ) : (
                            <div className="text-xl font-semibold text-center opacity-60 cursor-not-allowed">
                              {item.name}
                              <p className="mt-2 text-center text-sm">
                                {item.description}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {callsToAction.length > 0 && (
                      <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white/50 backdrop-blur-sm">
                        {callsToAction.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center text-center text-black hover:text-white justify-center gap-x-3 p-1 text-md font-semibold hover:bg-black transition-colors duration-200"
                          >
                            {/* <item.icon
              className="w-8 h-8 text-white"
              aria-hidden="true"
            /> */}
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </PopoverPanel>
                </Popover>

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white uppercase"
                  >
                    {item.name}
                  </Link>
                ))}
              </PopoverGroup>
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
            className="header__hamburger lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`off-canvas fixed inset-0 bg-black z-50 h-lvh transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="off-canvas__inner py-2 px-5 bg-black border-b-2 border-[#683e2a]">
          <div className="flex justify-between">
            <div className="logo">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo1.png"
                  alt="TAW Designs Logo"
                  className="w-auto h-16 md:h-24"
                />
                <span className="text-md md:text-2xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent leading-tight">
                  TAW <br /> DESIGNS
                </span>
              </Link>
            </div>
            <button onClick={toggleMobileMenu} aria-label="Close menu">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        <div className="off-canvas__inner py-5 px-7">
          <nav className="off-canvas__nav">
            <PopoverGroup className=" lg:gap-x-12 text-lg font-medium">
              {navigationmobile.map((item) => (
                <ul className="space-y-6">
                  <li className="uppercase text-md pb-5">
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#eed3b8]"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                </ul>
              ))}

              <Popover className="relative">
                <PopoverButton className="flex items-center uppercase justify-between w-full gap-x-1 text-white hover:text-[#eed3b8] focus:outline-none ">
                  Services
                  <ChevronDownIcon className="h-5 w-5" />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className=" p-4 transition-opacity duration-300 ease-in-out"
                >
                  {premiumservices.map((item) => (
                    <div key={item.name} className="flex flex-col p-2">
                      <Link
                        href={item.href}
                        className=" uppercase"
                        onClick={toggleMobileMenu}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </PopoverPanel>
              </Popover>
            </PopoverGroup>
          </nav>
        </div>
        {/* <div className="off-canvas__footer absolute bottom-0 w-full p-8 bg-black">
          <div className="off-canvas__footer--inner flex justify-end">
            <div className="logo-sister w-full">
              <Link
                href="/sister"
                className="text-[#463cc4] text-2xl w-full justify-between flex items-center"
              >
                <div><ArrowBigRight className="w-8 h-8"/></div>
                <div>INTERIOR DESIGNS</div>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}
