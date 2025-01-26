"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
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
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999] bg-white bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between py-5">
          <div className="w-40">
            <Link href="/" className="block">
              <Image
                src="/images/logo/logo-2.svg"
                alt="logo"
                width={140}
                height={30}
                className="w-full"
              />
            </Link>
          </div>

          <div className="flex items-center gap-x-8">
            <nav
              className={`navbar absolute right-0 top-full z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              } lg:flex lg:items-center`}
            >
              <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id}>
                    <Link
                      href={menuItem.path}
                      className={`block py-2 text-base transition-colors duration-200 hover:text-blue-600 lg:inline-block ${
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

            <div className="flex items-center gap-x-4">
              <Link
                href="/request-demo"
                className="hidden rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 lg:inline-block"
              >
                Request Free Demo
              </Link>

              <button
                onClick={navbarToggleHandler}
                className="relative h-7 w-7 lg:hidden"
                aria-label="Toggle Menu"
              >
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-7 -translate-y-1/2 rounded bg-gray-900 transition-all duration-200 ${
                    navbarOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-7 -translate-y-1/2 rounded bg-gray-900 transition-all duration-200 ${
                    navbarOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-7 -translate-y-1/2 rounded bg-gray-900 transition-all duration-200 ${
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
