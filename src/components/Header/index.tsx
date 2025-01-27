"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const usePathName = usePathname();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center transition-all duration-300 ${
        sticky
          ? "fixed z-[9999] bg-white/80 shadow-sm backdrop-blur-sm h-16"
          : "absolute bg-transparent h-20"
      }`}
    >
      <div className={`container mx-auto px-4 h-full flex items-center transition-all duration-300`}>
        <div className={`relative flex w-full items-center justify-between`}>
          <div className={`w-28 transition-all duration-300 ${sticky ? 'w-24' : 'w-28'}`}>
            <Link href="/" className="block">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={140}
                height={30}
                className={`w-full transition-all duration-300 ${sticky ? 'scale-75' : 'scale-85'}`}
              />
            </Link>
          </div>

          <div className="flex items-center gap-x-4">
            <nav
              className={`navbar absolute right-0 top-full z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              } lg:flex lg:items-center`}
            >
              <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id}>
                    <Link
                      href={menuItem.path}
                      className={`block transition-all duration-300 hover:text-blue-600 lg:inline-block ${
                        sticky ? 'py-1 text-sm' : 'py-2 text-sm'
                      } ${
                        usePathName === menuItem.path
                          ? "text-blue-600"
                          : "text-gray-900"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-x-3">
              <Link
                href="/request-demo"
                className={`hidden rounded-full bg-blue-600 font-medium transition-all duration-300 text-white hover:bg-blue-700 lg:inline-block ${
                  sticky ? 'px-5 py-1.5 text-sm' : 'px-6 py-2.5 text-sm'
                }`}
              >
                Request Free Demo
              </Link>

              <button
                onClick={navbarToggleHandler}
                className={`relative transition-all duration-300 lg:hidden ${
                  sticky ? 'h-6 w-6' : 'h-7 w-7'
                }`}
                aria-label="Toggle Menu"
              >
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-gray-900 transition-all duration-200 ${
                    navbarOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-gray-900 transition-all duration-200 ${
                    navbarOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-gray-900 transition-all duration-200 ${
                    navbarOpen ? "-rotate-45" : "translate-y-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
