"use client";
import classNames from "classnames";
import { defaultNavItems } from "./navDefItems";
import Link from "next/link";
import { GoSignOut } from "react-icons/go";

import { useState } from "react";
import {
  Bars3Icon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import AdminProfile from "../profile";

export default function AdminSideBar({ navItems = defaultNavItems }) {
  const [collapsed, setCollapsed] = useState(false);
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  const [shown, setShown] = useState(false);

  return (
    <div>
      <nav
        className={classNames({
          "bg-indigo-700 text-white": true, // colors
          "flex items-center justify-between": true, // layout
          "w-screen md:w-full static z-0 px-5 shadow-sm h-[73px] top-0 block md:hidden":
            true, //positioning & styling
        })}
      >
        <div className="font-bold text-lg">Админы хуудас</div>
        <div className="flex-grow" />
        <button
          className="block md:hidden text-white"
          onClick={() => {
            setShown(!shown);
          }}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>
      <div
        className={classNames({
          "bg-indigo-700 h-screen text-zinc-50 fixed md:sticky md:top-0 md:translate-x-0 z-20":
            true,
          "transition-all duration-300 ease-in-out": true,
          "w-[230px]": !collapsed,
          "w-16": collapsed,
          "-translate-x-full": !shown,
        })}
      >
        <div
          className={classNames({
            "flex items-center border-b border-b-indigo-800 transition-none":
              true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          {/* {!collapsed && <span className="whitespace-nowrap">My Logo</span>} */}
          {!collapsed && <AdminProfile />}
          <button
            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <div>
          <nav className="flex-grow">
            <ul
              className={classNames({
                "my-2 flex flex-col gap-2 items-stretch": true,
              })}
            >
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classNames({
                      "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
                      "transition-colors duration-300": true, //animation
                      "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                      "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                    })}
                  >
                    <Link href={item.href} className="flex gap-2">
                      {item.icon} <span>{!collapsed && item.label}</span>
                    </Link>
                  </li>
                );
              })}
              <li
                className={classNames({
                  "text-indigo-100 hover:bg-indigo-900 flex ": true, //colors
                  "transition-colors duration-300": true, //animation
                  "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                  "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                })}
              >
                <button
                  className="flex gap-2 items-stretch"
                  onClick={() => signOut()}
                >
                  <GoSignOut className="w-6 h-6" />{" "}
                  <span>{!collapsed && "Гарах"}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
