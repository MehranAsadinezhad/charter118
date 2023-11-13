import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { BsTriangleFill } from "react-icons/bs";

export default function UserMenu({ menu, setMenu }) {
  const [detailRoles, setDetaiRoles] = useState(false);

  return (
    <div
      className={`${
        menu
          ? "pointer-events-auto z-50 translate-y-1.5 opacity-100"
          : "pointer-events-none -z-10 translate-y-10 opacity-0"
      } absolute -right-24 flex w-[265px] flex-col rounded-lg border-t-2 border-secondary bg-white transition-all duration-500`}
    >
      <div className="flex flex-col items-center gap-5 rounded-t-lg bg-primary py-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-darkGray ring-2 ring-light">
          <GoPersonFill className="text-3xl text-light" />
        </div>
        <div className="flex items-center gap-5">
          <a href="c" className="text-gray-300 hover:text-graay">
            ورود
          </a>
          <span className="text-sm text-gray-400">|</span>
          <a href="d" className="text-gray-300 hover:text-graay">
            ثبت نام
          </a>
        </div>
        <p className="cursor-pointer text-graay">فارسی</p>
      </div>
      <ul className="flex flex-col p-4 pb-2 text-sm text-gray-500">
        <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
          <FaHome className="text-xl" />
          <p>صفحه اصلی</p>
        </li>
        <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
          <FaHome className="text-xl" />
          <p>پیگیری بلیط</p>
        </li>
        <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
          <FaHome className="text-xl" />
          <p>هتل داخلی</p>
        </li>
        <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
          <FaHome className="text-xl" />
          <p>آموزش رزرو بلیط هواپیما</p>
        </li>
        <li className="flex cursor-pointer items-center gap-4 rounded-md p-3 transition-all duration-500 hover:bg-graay">
          <FaHome className="text-xl" />
          <p>درباره ما</p>
        </li>
        <li
          // onClick={() => {
          //   if (detailRoles) {
          //     setDetaiRoles(false);
          //   } else {
          //     setDetaiRoles(true);
          //   }
          // }}
          className="flex cursor-pointer items-center rounded-md p-3 transition-all duration-500 hover:bg-graay"
        >
          <div
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <FaHome className="text-xl" />
              <p>قوانین</p>
            </div>
            <FaAngleDown
              className={`${
                detailRoles ? "rotate-180" : ""
              } transition-all duration-300`}
            />
          </div>
        </li>
      </ul>
      {/* <div
        className={`mx-8 mb-5 ${
          detailRoles ? "block" : "hidden"
        } text-sm leading-7 text-darkestBlue transition-all duration-500`}
      >
        <p className="cursor-pointer hover:text-black">قوانین بلیط چارتر</p>
        <p className="cursor-pointer hover:text-black">
          جریمه استرداد بلیط سیستمی
        </p>
        <p className="cursor-pointer hover:text-black">بار همراه مسافر</p>
      </div> */}
      <span className="absolute -top-2.5 right-36 -z-10 text-xs text-white">
        <BsTriangleFill />
      </span>
    </div>
  );
}
