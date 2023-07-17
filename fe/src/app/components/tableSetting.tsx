"use client";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
export default function TableSetting({
  method,
  setMethod,
  payment,
  setPayment,
}: any) {
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = () => {
    setMethod((prevChecked: boolean) => !prevChecked);
  };
  const handlePaymentCheckboxChange = () => {
    setPayment((prevChecked: boolean) => !prevChecked);
  };
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="relative">
      <button
        onClick={handleToggleModal}
        className="text-indigo-100 hover:bg-indigo-900 transition-colors duration-200 rounded-md p-2 mx-3"
      >
        <IoSettingsOutline className="w-6 h-6" />
      </button>
      {showModal && (
        <div className="absolute z-20 -left-20 bg-white w-[158px] border p-2">
          {/* <div> */}
          <div className="flex flex-col gap-1">
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
          </div>
        </div>
      )}
    </div>
  );
}
