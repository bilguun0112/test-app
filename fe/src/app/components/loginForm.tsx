"use client";
import React from "react";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);
  const router = useRouter();
  const [error, setError] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  async function handleSubmit(e: any) {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: e.target.email.value,
      password: e.target.password.value,
      redirect: false,
    });
    console.log(res);
    if (res?.error) return setError(true);
    router.replace("/cargos");
  }
  return (
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
      <div>
        {error ? <div>Нэвтрэх нэр болон нууц үг шалгана уу !</div> : null}
      </div>
      <button
        type="submit"
        className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sign in
      </button>
    </form>
  );
}
