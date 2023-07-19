"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-screen border-b border-gray-200 sticky top-0">
      <nav className="bg-white w-full mx-auto z-20 px-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img src="../favicon.ico" className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-[32px] font-semibold whitespace-nowrap">
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
              {!isMobileMenuOpen ? (
                <FaBars className="text-[20px]" />
              ) : (
                <HiX className="text-[20px]" />
              )}
            </button>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto top-12`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col text-[20px] md:py-5 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-2 lg:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-1 tablets:px-2 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 "
                  aria-current="page"
                >
                  Нүүр
                </Link>
              </li>
              <li className="">
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
                >
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link
                  href="/customer/tracking"
                  className="block py-2 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
                >
                  Ачаа шалгах
                </Link>
              </li>
              <li>
                <Link
                  href="/customer/help"
                  className="block py-2 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
                >
                  Тусламж
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className=" py-2 hidden pl-3 pr-4 tablets:px-2 lg:block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
                >
                  Холбоо барих
                </Link>
              </li>
              <li>
                <Link
                  href="/cargos"
                  className="block py-2 pl-3 pr-4 tablets:px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
                >
                  Админ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
