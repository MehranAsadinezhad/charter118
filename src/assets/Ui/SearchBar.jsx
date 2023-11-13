import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { BiSolidPlaneLand } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";

export default function SearchBar() {
  return (
    <div  className="relative bottom-28 items-center z-40 justify-center flex flex-col">
      <div className="absolute ml-[114px] flex items-center gap-3">
        <a
          href="#."
          className="rounded-md rounded-b-none z-10 bg-graay px-3 pb-3 pt-2 text-xl  text-primary transition-all duration-150"
        >
          بلیط هواپیما
        </a>
        <a
          href="#."
          className="rounded-md rounded-b-none z-10 bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          هتل داخلی
        </a>
        <a
          href="#."
          className="rounded-md rounded-b-none z-10 bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          هتل خارجی
        </a>
        <a
          href="#."
          className="rounded-md rounded-b-none z-10 bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          پرواز خارجی
        </a>
        <a
          href="#."
          className="rounded-md rounded-b-none z-10 bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          حجوزات العرب
        </a>
        <a
          href="#."
          className="rounded-md rounded-b-none z-10 bg-graay p-3 text-primary opacity-80 transition-all duration-150 hover:opacity-95"
        >
          پکیج تور
        </a>
      </div>
      <form className="absolute top-4 rounded-md rounded-tr-none bg-graay px-5 py-6 pb-1 shadow-form">
        <div className="flex items-center gap-4 ">
          <div className="relative w-56 rounded-md">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 transition-all duration-150 placeholder:text-gray-500 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="مبدا"
            ></input>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <BiSolidPlaneTakeOff className="text-2xl text-gray-300"></BiSolidPlaneTakeOff>
            </div>
          </div>
          <FaExchangeAlt className="cursor-pointer text-lg text-primary" />
          <div className="relative w-56 rounded-md">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 transition-all duration-150 placeholder:text-gray-500 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="مقصد"
            ></input>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <BiSolidPlaneLand className="text-2xl text-gray-300"></BiSolidPlaneLand>
            </div>
          </div>

          <div className="relative w-56 rounded-md">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-3 pl-7 pr-12 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 transition-all duration-150 placeholder:text-gray-500 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="تاریخ رفت"
            ></input>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <BsFillCalendarDateFill className="text-lg text-gray-300"></BsFillCalendarDateFill>
            </div>
          </div>
        </div>
        <p className="my-1 ml-2 text-end text-xs text-gray-400">
          نمایش کمترین نرخ در صورت عدم ورود تاریخ
        </p>
        <div className="mt-2 text-end">
          <button className="rounded-md bg-secondary px-14 py-2 text-lg font-semibold text-primary transition-all duration-200 hover:bg-light hover:ring-1 hover:ring-secondary">
            جستجو
          </button>
        </div>
      </form>
    </div>
  );
}
