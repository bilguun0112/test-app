"use client";

import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";

export default function CreateOrder(): JSX.Element {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cargos/add`;
  const [result, setResult] = useState("");
  const paymentMethods = [
    {
      id: 1,
      method: "Бэлэн",
    },
    {
      id: 2,
      method: "Данс",
    },
    {
      id: 3,
      method: "Монголд",
    },
  ];
  const [value, setValue] = useState("");
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const paymentMethod =
    Array.isArray(paymentMethods) &&
    paymentMethods.map((p, idx) => (
      <option key={idx} value={p.method} className="text-[16px]">
        {p.method}
      </option>
    ));
  async function handleSubmit(e: any) {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const [year, month, day] = new Date(formattedDate)
      .toISOString()
      .split("T")[0]
      .split("-");

    const formattedDateString = `${year}-${month}-${day}`;

    const formData = {
      order_number: e.target.orderNumber.value,
      sender: e.target.sender.value,
      sender_number: e.target.senderNumber.value,
      receiver: e.target.receiver.value,
      receiver_number: e.target.receiverNumber.value,
      cargo_note: e.target.cargoNote.value,
      cargo_count: e.target.cargoCount.value,
      cargo_weight: e.target.cargoWeight.value,
      first_payment: e.target.cargoOrder.value,
      last_payment: e.target.cargoPayment.value,
      payment_method: value,
      registration_date: formattedDateString,
    };
    try {
      const response: AxiosResponse = await axios.post(URL, formData);
      const createdCargo = response.data;
      if (createdCargo.success === true) {
        setResult(createdCargo.message);
      }
      console.log(createdCargo);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  md:h-screen lg:py-0">
          {/* <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"> */}
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-3xl xl:p-0">
            {/* <div className="p-6 space-y-4 md:space-y-6 sm:p-8"> */}
            <div className="p-2 space-y-4 md:space-y-6 sm:p-2">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Ачаа бүртгэх
              </h1>
              {/* <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}> */}
              <form onSubmit={handleSubmit}>
                <div className="w-1/2 mb-4 pr-[16px]">
                  <label
                    htmlFor="orderNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Ачааны код :
                  </label>
                  <input
                    type="text"
                    name="orderNumber"
                    id="orderNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                    placeholder="Ачааны код"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between gap-8">
                    <div className=" w-full">
                      <label
                        htmlFor="sender"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Илгээгч :
                      </label>
                      <input
                        type="text"
                        name="sender"
                        id="sender"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                        placeholder="Илгээгч"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="senderNumber"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Илгээгчийн утас :
                      </label>
                      <input
                        type="text"
                        name="senderNumber"
                        id="senderNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                        placeholder="Илгээгчийн утас"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <label
                        htmlFor="receiver"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Хүлээн авагч :
                      </label>
                      <input
                        type="text"
                        name="receiver"
                        id="receiver"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                        placeholder="Wick"
                        required
                      />
                    </div>
                    <div className=" w-full">
                      <label
                        htmlFor="receiverNumber"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Хүлээн авагчийн утас :
                      </label>
                      <input
                        type="text"
                        name="receiverNumber"
                        id="receiverNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                        placeholder="Wick"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="cargoNote"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Ачааны мэдээлэл:
                    </label>
                    <textarea
                      name="cargoNote"
                      id="cargoNote"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                      placeholder="Ачааны тухай мэдээлэл"
                    />
                  </div>
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <label
                        htmlFor="cargoCount"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Тоо ширхэг :
                      </label>
                      <input
                        type="text"
                        name="cargoCount"
                        id="cargoCount"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                        placeholder="Тоо ширхэг"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="cargoWeight"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Ачааны жин :
                      </label>
                      <input
                        type="text"
                        name="cargoWeight"
                        id="cargoWeight"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                        placeholder="Ачааны жин"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <label
                        htmlFor="cargoOrder"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Тооцоо :
                      </label>
                      <input
                        type="text"
                        name="cargoOrder"
                        id="cargoOrder"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                        placeholder="Төлбөр тооцоо"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="cargoPayment"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Үлдэгдэл төлбөр :
                      </label>
                      <input
                        type="text"
                        name="cargoPayment"
                        id="cargoPayment"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                        placeholder="Төлбөрийн үлдэгдэл"
                      />
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="w-1/2 mb-4 pr-[16px]">
                      {/* <label
                        htmlFor="paymentMethod"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Төлбөрийн хэлбэр :
                      </label>
                      <input
                        type="text"
                        name="paymentMethod"
                        id="paymentMethod"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                        placeholder="Төлбөрийн хэлбэр"
                      /> */}
                      <label
                        htmlFor="paymentMethod"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Төлбөрийн хэлбэр :
                      </label>
                      <select
                        id="small"
                        value={value}
                        onChange={handleChange}
                        // className="relative text-[16px] w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                      >
                        <option
                          value=""
                          defaultValue=""
                          className="text-[16px]"
                        >
                          Төлбөрийн хэлбэр
                        </option>
                        {paymentMethod}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className=" text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Бүртгэл үүсгэх
                  </button>
                  <div>{result}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}