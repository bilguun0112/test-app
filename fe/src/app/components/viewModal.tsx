"use client";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";

export default function ViewModal({ cargos }: any) {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    console.log("Modal clicked");
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="font-medium text-blue-600  hover:underline"
        onClick={handleToggleModal}
      >
        Харах
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-5 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-[#fff] rounded-lg shadow-lg p-4 mx-3 sm:mx-0 sm:p-8 w-full sm:w-1/3">
            <div className="flex justify-between mb-5">
              <div className="text-[24px]">Барааны мэдээлэл</div>
              <button onClick={closeModal}>
                <HiX />
              </button>
            </div>

            <table className="w-full table-fixed text-black">
              <tbody>
                <tr>
                  <td className="border border-slate-600 pl-2">Ачааны код</td>
                  <td className="border border-slate-600 pl-2">
                    {cargos.order_number}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">Илгээгч</td>

                  <td className="border border-slate-600 pl-2">
                    <tr>{cargos.sender}</tr>
                    <tr>
                      <td>{cargos.sender_number}</td>
                    </tr>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">Хүлээн авагч</td>
                  <td className="border border-slate-600 pl-2">
                    <tr>
                      <td>{cargos.receiver}</td>
                    </tr>
                    <tr>
                      <td>{cargos.receiver_number}</td>
                    </tr>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">
                    Ачааны тэмдэглэл
                  </td>
                  <td className="border border-slate-600 pl-2">
                    {cargos.cargo_note}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">Тоо ширхэг</td>
                  <td className="border border-slate-600 pl-2">
                    {cargos.cargo_count}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">Жин</td>
                  <td className="border border-slate-600 pl-2">
                    {cargos.cargo_weight}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">Төлбөр</td>
                  <td className="border border-slate-600 pl-2">
                    {cargos.first_payment}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">
                    Төлбөрийн хэлбэр
                  </td>
                  <td className="border border-slate-600 pl-2">
                    {cargos.payment_method}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">
                    Төлбөрийн үлдэгдэл
                  </td>
                  <td className="border border-slate-600 pl-2">
                    {cargos.last_payment}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">Бүртгэсэн</td>
                  <td className="border border-slate-600 pl-2">
                    {cargos.order_number}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-600 pl-2">Огноо</td>
                  <td className="border border-slate-600 pl-2">
                    {cargos.registration_date}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
