"use client";

import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/add`;
const defaultImage =
  "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg";

export default function register(): JSX.Element {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [showComfirmPassword, setShowComfirmPassword] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [warning, setWarning] = useState("");
  const [done, setDone] = useState("");
  const toggleShowComfirmPassword = () => {
    setShowComfirmPassword(!showComfirmPassword);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: any) => {
    setPasswords(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const [passwords, setPasswords] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      email: e.target.email.value,
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      password: e.target.password.value,
      imgURL: defaultImage,
      registration_date: formattedDateString,
    };

    if (passwords === confirmPassword) {
      setPasswordsMatch(true);
      try {
        const response: AxiosResponse = await axios.post(URL, formData);
        const createdUser = response.data;
        if (createdUser.success === true) {
          setDone(createdUser.message);
          setTimeout(() => {
            router.push("/login");
          }, 3000);
        } else {
          setWarning(createdUser.message);
        }
        console.log(createdUser);
      } catch (error: any) {
        setWarning(error.response.data.message);
      }
    } else {
      setPasswordsMatch(false);
    }
  }
  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Бүртгэл үүсэх
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Цахим хаяг
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
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Овог
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="firstName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Нэр
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="lastName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-200 focus:border-5 block w-full p-2.5"
                      placeholder="Wick"
                      required
                    />
                  </div>
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
                    onChange={handlePasswordChange}
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
                <div className="relative">
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Нууц үг давтах
                  </label>
                  <input
                    type={showComfirmPassword ? "password" : "text"}
                    onChange={handleConfirmPasswordChange}
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleShowComfirmPassword}
                    className="absolute right-3 top-9"
                  >
                    {showComfirmPassword ? (
                      <BiHide className="text-2xl cursor-pointer text-gray-400 hover:text-black" />
                    ) : (
                      <BiShow className="text-2xl cursor-pointer text-gray-400 hover:text-black" />
                    )}
                  </button>
                  <div className="text-center my-2">
                    {!passwordsMatch ? (
                      <div className=" text-red-003 my-1">
                        Нууц үг таарахгүй байна
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Бүртгэл үүсгэх
                </button>
                <div className="text-red-400">{warning}</div>
                <div className="text-green-400">{done}</div>
                <p className="text-sm font-light text-gray-500">
                  Бүртгэлтэй хэрэглэгч бол?{" "}
                  <Link
                    href="#"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Нэвтрэх
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
