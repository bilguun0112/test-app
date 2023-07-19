"use client";
import paymentMethods from "@/lib/documents/paymentMethod";
import React, { useEffect, useState } from "react";
const initialData = {
  order_number: "",
  sender: "",
  sender_number: "",
  receiver: "",
  receiver_number: "",
  cargo_note: "",
  cargo_count: "",
  cargo_weight: "",
  first_payment: "",
  last_payment: "",
  payment_method: "",
  registration_date: "",
  start_date: "",
  end_date: "",
};
export default function Page({ params }: { params: any }) {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cargos/byId/${params.id}`;
  const [userData, setUserData] = useState(initialData);
  const UPDATE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cargos/update/${params.id}`;
  const [value, setValue] = useState("");
  const [result, setResult] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      if (data.success) {
        setUserData(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  console.log(userData);
  const paymentMethod =
    Array.isArray(paymentMethods) &&
    paymentMethods.map((p, idx) => (
      <option key={idx} value={p.method} className="text-[16px]">
        {p.method}
      </option>
    ));
  useEffect(() => {
    getData();
  }, []);
  async function handleSubmit(e: any) {
    e.preventDefault();

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
    };
    console.log("formdata", formData);
    console.log("userData", userData);
    try {
      const res = await fetch(UPDATE_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.success);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full md:w-3/4 p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="pt-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Ачааны мэдээлэл засах
          </h1>
          <form className="p-2" onSubmit={handleSubmit}>
            <div className="w-full md:w-1/2 mb-4 md:pr-[16px]">
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
                value={userData.order_number}
                disabled
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="md:flex justify-between gap-8">
                <div className="w-full">
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
                    value={userData.sender}
                    onChange={(e) => {
                      setUserData({ ...userData, sender: e.target.value });
                    }}
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
                    value={userData.sender_number}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        sender_number: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </div>
              <div className="md:flex justify-between gap-8">
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
                    value={userData.receiver}
                    onChange={(e) => {
                      setUserData({ ...userData, receiver: e.target.value });
                    }}
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
                    value={userData.receiver_number}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        receiver_number: e.target.value,
                      });
                    }}
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
                  value={userData.cargo_note}
                  onChange={(e) => {
                    setUserData({ ...userData, cargo_note: e.target.value });
                  }}
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
                    value={userData.cargo_count}
                    onChange={(e) => {
                      setUserData({ ...userData, cargo_count: e.target.value });
                    }}
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
                    value={userData.cargo_weight}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        cargo_weight: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="md:flex justify-between gap-8">
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
                    value={userData.first_payment}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        first_payment: e.target.value,
                      });
                    }}
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
                    value={userData.last_payment}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        last_payment: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-full sm:w-1/2 pr-[16px]">
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
                    <option value="" defaultValue="" className="text-[16px]">
                      Төлбөрийн хэлбэр
                    </option>
                    {paymentMethod}
                  </select>
                </div>
              </div>
              <div className="flex justify-between gap-8 pb-4">
                <div className="w-full">
                  <label
                    htmlFor="startDate"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Ачаа гарах :
                  </label>
                  <input
                    name="start"
                    id="start"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  "
                    placeholder="Ачаа гарах"
                    // value={userData?.start_date}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        start_date: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="endDate"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Монголд буух :
                  </label>
                  <input
                    name="end"
                    type="date"
                    id="end"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  "
                    placeholder="Монголд буух"
                    // value={userData?.end_date}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        end_date: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <button
                type="submit"
                className=" text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Мэдээлэл шинэчлэх
              </button>
              {result ? (
                <div className="text-emerald-600 text-xl">
                  Бүртгэл амжилттай шинэчлэгдлээ
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
