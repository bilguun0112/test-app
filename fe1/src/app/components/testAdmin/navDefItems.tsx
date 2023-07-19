import React from "react";
import {
  FolderIcon,
  FolderPlusIcon,
  UserPlusIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Үндсэн хуудас",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Ачаа бүртгэл",
    href: "/cargos",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Ачаа бүртгэх",
    href: "/cargos/create",
    icon: <FolderPlusIcon className="w-6 h-6" />,
  },
  {
    label: "Бүртгэл үүсгэх",
    href: "/cargos/register",
    icon: <UserPlusIcon className="w-6 h-6" />,
  },
];
