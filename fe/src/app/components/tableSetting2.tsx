"use client";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";

import { IoSettingsOutline } from "react-icons/io5";
export default function TableSetting2({
  method,
  setMethod,
  payment,
  setPayment,
}: any) {
  const handleCheckboxChange = () => {
    setMethod((prevChecked: boolean) => !prevChecked);
  };
  const handlePaymentCheckboxChange = () => {
    setPayment((prevChecked: boolean) => !prevChecked);
  };

  return (
    <Menu placement="left-start">
      <MenuHandler>
        <IconButton variant="text" className="flex justify-center items-center">
          <IoSettingsOutline className="h-5 w-5" />
        </IconButton>
      </MenuHandler>
      <MenuList className="flex flex-col gap-2 items-start">
        <MenuItem className="flex items-center gap-4 py-2 pr-8">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={handleCheckboxChange}
              checked={method}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600" />
            <span className="ml-3 text-sm font-medium text-gray-900">
              Төрөл
            </span>
          </label>
        </MenuItem>
        <MenuItem>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={handlePaymentCheckboxChange}
              checked={payment}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600" />
            <span className="ml-3 text-sm font-medium text-gray-900">
              Үлдэгдэл
            </span>
          </label>
        </MenuItem>
        {/* <MenuItem>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={handleAdminCheckboxChange}
              checked={admin}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600" />
            <span className="ml-3 text-sm font-medium text-gray-900">
              Ажилтан
            </span>
          </label>
        </MenuItem> */}
      </MenuList>
    </Menu>
  );
}
