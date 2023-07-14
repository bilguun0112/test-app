"use client";
import Link from "next/link";
import SignInButton from "../SignInButton";

export default function AdminHeader(): JSX.Element {
  return (
    <div className="w-screen border-b border-gray-200 sticky top-0">
      <nav className="bg-white w-full max-w-[1080px] mx-auto z-20 px-5 py-3">
        <ul className="flex w-full justify-between font-medium md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li className="flex gap-10">
            <Link
              href="/cargos"
              className="block text-[24px] py-5 pl-3 pr-4 tablets:px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
            >
              Тээвэр
            </Link>

            <Link
              href="/cargos/create"
              className="block text-[24px] py-5 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              Ачаа бүртгэх
            </Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
