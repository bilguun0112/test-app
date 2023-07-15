"use client";
import ResultTable from "@/app/components/result";
import React, { useState } from "react";

export default function TrackingPage(): JSX.Element {
  const [term, setTerm] = useState("");
  const [show, setShow] = useState(false);
  const [result, setResult] = useState({});
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cargos/search?term=${term}`;
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch(URL);
    const data = await response.json();
    if (data.success) {
      setResult(data.data);
      setShow(data.success);
    }
    console.log("result", data);
  };
  return (
    <div>
      <div className="pt-10 w-full md:w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
              placeholder="Ачааны дугаар оруулна уу"
              onChange={(e) => setTerm(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Хайх
            </button>
          </div>
        </form>
      </div>
      <ResultTable data={result} show={show} />
    </div>
  );
}
