"use client";

import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <nav>
        <ul className="flex items-center text-[16px]">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
              className={`${
                isFirstPage
                  ? "bg-grey"
                  : "bg-white text hover:bg-grey hover:text-white"
              } text-custom-black border border-custom-black font-bold py-3 px-4 rounded-l-lg focus:outline-none`}
            >
              <BsChevronLeft />
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-blue-200 text-custom-black py-2 px-4"
                    : "bg-white  hover:bg-grey hover:text-gray-500 text-custom-black font-medium py-2 px-4"
                } focus:outline-none border-y border-r border-custom-black`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
              className={`${
                isLastPage
                  ? "bg-grey"
                  : "bg-white hover:bg-gray-400 hover:text-gray-500"
              } text-custom-black border-r border-y border-custom-black py-3 px-4 rounded-r-lg focus:outline-none`}
            >
              <BsChevronRight />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
