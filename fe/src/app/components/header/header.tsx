"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-screen border-b border-gray-200 sticky top-0">
      <nav className="bg-white w-full max-w-[1280px] mx-auto z-20 px-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img src="../favicon.ico" className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Cargo
            </span>
          </Link>

          <div className="flex items-center">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? <FaBars /> : <HiX />}
            </button>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto top-12`}
            // ${
            //   isMobileMenuOpen ? "right-0 absolute" : ""
            // }
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 tablets:px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Нүүр
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 tablets:px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Үйл ажиллагаа
                </Link>
              </li>
              <li>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    className="block py-2 pl-3 pr-4 tablets:px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    id="user-menu-button"
                    aria-expanded={isDropdownOpen}
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <div>
                      Хэрэглэгчийн булан <FaAngleDown className="inline" />
                    </div>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  {isDropdownOpen && (
                    <div
                      className="z-20 absolute right-0 top-5 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                      id="user-dropdown"
                    >
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                          <Link
                            href="/customer/tracking"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Ачаа шалгах
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/customer/help"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Тусламж
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 tablets:px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Холбоо барих
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
