"use client";

import ViewModal from "@/app/components/viewModal";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MainPage(): JSX.Element {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cargos/list`;
  const [cargoData, setCargoData] = useState({});
  const router = useRouter();
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
  const getList =
    Array.isArray(cargoData) &&
    cargoData.map((d, idx) => {
      console.log(d);
      return (
        <tr className="bg-white border-b" key={idx}>
          <th
            scope="row"
            className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap"
          >
            {d.order_number}
          </th>
          <td className="px-3 py-4">{d.receiver}</td>
          <td className="px-6 py-4">{d.receiver_number}</td>
          <td className="px-6 py-4">{d.cargo_note}</td>
          <td className="px-3 py-4">{d.first_payment}</td>
          <td className="px-1 py-4">{d.last_payment}</td>
          <td className="px-6 py-4">{d.sender}</td>
          <td className="px-6 py-4">
            <div className="flex gap-4">
              <ViewModal cargos={d} />
              <button
                className="font-medium text-blue-600  hover:underline"
                onClick={() => router.push(`cargos/edit/${d._id}`)}
              >
                Засах
              </button>
            </div>
          </td>
        </tr>
      );
    });
  return (
    <div>
      <div>
        <h1 className="text-[32px] py-5">Ачааны бүртгэлийн жагсаалт</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-3 py-1">
                  Ачааны код
                </th>
                <th scope="col" className="px-3 py-3">
                  Хүлээн авагч
                </th>
                <th scope="col" className="px-6 py-3">
                  Хүлээн авагч дугаар
                </th>
                <th scope="col" className="px-6 py-3">
                  Тайлбар
                </th>
                <th scope="col" className="px-3 py-3">
                  Төлбөр
                </th>
                <th scope="col" className="px-1 py-3">
                  Үлдэгдэл
                </th>
                <th scope="col" className="px-6 py-3">
                  Ажилтан
                </th>
                <th scope="col" className="px-6 py-3">
                  Үйлдэл
                </th>
              </tr>
            </thead>
            <tbody>{getList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
