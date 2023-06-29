"use client";

import React, { useContext } from "react";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { LoginContext } from "../context/context";

const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`;

export default function Signin(): JSX.Element {
  const { setLogin } = useContext(LoginContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  async function handleSubmit(e: any) {
    e.preventDefault();
    // const logInUser = {
    //   email: e.target.email.value,
    //   password: e.target.password.value,
    // };
    // try {
    //   const response: AxiosResponse = await axios.post(URL, logInUser);
    //   const data = response.data;
    //   if (data.success === true) {
    //     const userData = {
    //       id: data.id,
    //       token: data.token,
    //     };
    //     localStorage.setItem("data", JSON.stringify(userData));
    //     setLogin(true);

    //     router.push("/");
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
    console.log("login clicked");
  }
  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Нэвтрэх
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Нэвтрэх нэр
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                    placeholder="Gmail@gmail.com"
                    required
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Нууц үг
                  </label>
                  <input
                    type={showPassword ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-9"
                  >
                    {showPassword ? (
                      <BiHide className="text-2xl cursor-pointer text-gray-400 hover:text-black" />
                    ) : (
                      <BiShow className="text-2xl cursor-pointer text-gray-400 hover:text-black" />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500">
                  Бүртгэл үүсгээгүй бол?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Бүртгүүлэх
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
