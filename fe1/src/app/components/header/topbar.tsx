"use client";
import Link from "next/link";
import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
export default function TopBar(): JSX.Element {
  return (
    <div className="bg-[#eeeeee] py-1 w-screen">
      <div className=" w-full max-w-[1280px] px-5 md:px-10 mx-auto flex md:justify-between max-h-8">
        <div className="flex items-center text-[#666666] text-[14px]">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            passHref
            className=" border-0 border-r-2 border-gray-500 hover:text-white "
          >
            <FontAwesomeIcon icon={faFacebook} className="fas fa-check px-4" />
          </Link>

          <Link
            href="https://www.facebook.com/"
            passHref
            className=" border-0 border-r-2 border-gray-500 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              className="fas fa-check px-4"
            />
          </Link>
          <div className="flex items-center pr-4 md:border-0 md:border-r-2 md:border-gray-500">
            <FontAwesomeIcon
              icon={faHeadset}
              className="fas fa-check px-4 hover:text-white hover:cursor-pointer "
            />
            <div className="pr-4 hover:text-white hover:cursor-pointer ">
              70007000
            </div>
            <div className="hover:text-white hover:cursor-pointer hidden fold:block sm:block">
              99999999
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center ">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="fas fa-check px-4 hover:text-white hover:cursor-pointer"
              />
              <div className="text-gray-500 hover:text-white hover:cursor-pointer">
                cargo@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center text-gray-500 ">
            <FontAwesomeIcon
              icon={faHeadset}
              className="fas fa-check pr-2 md:px-2 hover:text-white hover:cursor-pointer"
            />
            <div className="px-4 hover:text-white hover:cursor-pointer">
              82-6-780-6762
            </div>
            <div className="hover:text-white hover:cursor-pointer ">
              010-1234-1234
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
