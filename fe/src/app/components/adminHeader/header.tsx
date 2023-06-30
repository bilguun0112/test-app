import Link from "next/link";

export default function AdminHeader(): JSX.Element {
  return (
    <div className="w-screen border-b border-gray-200 sticky top-0">
      <nav className="bg-white w-full max-w-[1280px] mx-auto z-20 px-5">
        <ul className="flex flex-col font-medium md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link
              href="/"
              className="block py-2 pl-3 pr-4 tablets:px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
            >
              Тээвэр
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
              Ачаа бүртгэх
            </Link>
          </li>

          <li>Админ</li>
        </ul>
      </nav>
    </div>
  );
}
