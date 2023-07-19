"use client";

import DeleteButton from "@/app/components/deleteButton";
import Pagination from "@/app/components/pagination";
import TableSetting from "@/app/components/tableSetting";
import ViewModal from "@/app/components/viewModal";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MainPage(): JSX.Element {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cargos/list`;
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [cargoData, setCargoData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [method, setMethod] = useState(false);
  const [payment, setPayment] = useState(false);
  const [startDate, setStartDate] = useState(true);
  const [endDate, setEndDate] = useState(true);

  const router = useRouter();
  const handleDeleteSuccess = () => {
    getData();
  };
  async function getData() {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      if (data.success === true) {
        setCargoData(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const indexOfLastReview = currentPage * perPage;
  const indexOfFirstReview = indexOfLastReview - perPage;
  let currentCargoData = cargoData;
  if (cargoData.length > 10) {
    currentCargoData = cargoData.slice(indexOfFirstReview, indexOfLastReview);
  }
  let getList =
    Array.isArray(cargoData) &&
    currentCargoData.map((d, idx) => {
      return (
        <tr
          className={`border-b ${idx % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
          key={idx}
        >
          <th
            scope="row"
            className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap"
          >
            {d.order_number}
          </th>
          <td className="px-3 py-3">{d.receiver}</td>
          <td className="px-3 py-4">{d.receiver_number}</td>
          <td className="px-3 py-4">{d.cargo_note}</td>
          <td className="px-3 py-4">{d.first_payment}</td>
          <td className={`px-3 py-3 ${payment ? "hidden" : "block"}`}>
            {d.last_payment}
          </td>
          <td className="px-3 py-4">{d.admin_id.first_name}</td>

          <td className={`px-3 py-3 ${method ? "hidden" : "block"}`}>
            {d.payment_method}
          </td>

          <td className="px-3 py-3">
            <div className="flex gap-4">
              <ViewModal cargos={d} />
              <button
                className="font-medium text-yellow-600  hover:underline"
                onClick={() => router.push(`cargos/edit/${d._id}`)}
              >
                Засах
              </button>
              <DeleteButton id={d._id} onSuccess={handleDeleteSuccess} />
            </div>
          </td>
        </tr>
      );
    });
  if (searchTerm !== "") {
    const filteredList =
      Array.isArray(cargoData) &&
      cargoData.filter((list: any) => {
        return list.order_number
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
    getList =
      Array.isArray(filteredList) &&
      filteredList.map((d, idx) => {
        return (
          <tr
            className={`border-b ${idx % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
            key={idx}
          >
            <th
              scope="row"
              className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap"
            >
              {d.order_number}
            </th>
            <td className="px-3 py-3">{d.receiver}</td>
            <td className="px-3 py-4">{d.receiver_number}</td>
            <td className="px-3 py-4">{d.cargo_note}</td>
            <td className="px-3 py-4">{d.first_payment}</td>
            <td className={`px-3 py-3 ${payment ? "hidden" : "block"}`}>
              {d.last_payment}
            </td>
            <td className="px-3 py-4">{d.admin_id.first_name}</td>

            <td className={`px-3 py-3 ${method ? "hidden" : "block"}`}>
              {d.payment_method}
            </td>

            <td className="px-3 py-4">
              <div className="flex gap-4">
                <ViewModal cargos={d} />
                <button
                  className="font-medium text-blue-600  hover:underline"
                  onClick={() => router.push(`cargos/edit/${d._id}`)}
                >
                  Засах
                </button>
                <DeleteButton id={d._id} onSuccess={handleDeleteSuccess} />
              </div>
            </td>
          </tr>
        );
      });
  }
  return (
    <div className="">
      <div>
        <h1 className="text-[32px] py-5">Ачааны бүртгэлийн жагсаалт</h1>
        {/* Search bar */}
        <div className="flex justify-between items-center pb-4">
          <div className="w-full sm:w-5/6">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full sm:w-1/3 p-3 pl-4 sm:pl-10 text-sm placeholder:bg-[#ebedf4] text-custom-black  rounded-lg bg-[#ebedf4] focus:outline-none focus:border-[#0A4D68]"
                placeholder="Ачааны код"
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <TableSetting
            method={method}
            setMethod={setMethod}
            payment={payment}
            setPayment={setPayment}
            startDate={startDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            endDate={endDate}
          />
        </div>
        <div className="relative overflow-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Ачааны код
                </th>
                <th scope="col" className="px-3 py-3">
                  Хүлээн авагч
                </th>
                <th scope="col" className="px-3 py-3">
                  Утас
                </th>
                <th scope="col" className="px-3 py-3">
                  Тайлбар
                </th>
                <th scope="col" className="px-3 py-3">
                  Төлбөр
                </th>
                <th
                  scope="col"
                  className={`px-3 py-3 ${payment ? "hidden" : "block"}`}
                >
                  Үлдэгдэл
                </th>

                <th scope="col" className="px-3 py-3">
                  Ажилтан
                </th>

                <th
                  scope="col"
                  className={`px-3 py-3 ${method ? "hidden" : "block"}`}
                >
                  Төрөл
                </th>
                <th scope="col" className="px-3 py-3">
                  Үйлдэл
                </th>
              </tr>
            </thead>
            <tbody className="overflow-auto">{getList}</tbody>
          </table>
        </div>
      </div>
      <div className="">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(cargoData.length / perPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
