"use client";
import React from "react";
import Navbar from "../components/Nnavbar";
import Image from "next/image";
import pic1 from "../../public/template1/homescreen.png";
import pic1s from "../../public/template2.png";
import pic5 from "../../public/template5.png";
import pic6 from "../../public/template6.png";
import pic7 from "../../public/template7.png";
import pic8 from "../../public/template8.png";
import pic3 from "../../public/template3.png";
import pic4 from "../../public/template4.png";
import Link from "next/link";
function Page() {
  return (
    <>
      <Navbar />

      <h1 className="text-3xl font-bold text-orange-400 text-center mt-2 dark:text-white">
        Choose A Template
      </h1>

      <div className="templates w-full h-full   flex flex-col gap-10  lag:gap-4 lg:px-10  lg:grid grid-cols-3 lg:mb-2  items-center justify-start pt-4">
        <div className="template1  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic1} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            MODERN
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="#"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Select
            </Link>
            <Link
              href={"/template1"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div>

        <div className="template2  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic1s} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            ELEGANT
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="#"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Select
            </Link>
            <Link
              href={"/template2"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div>

        <div className="template3  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic3} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            BASIC
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="#"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Select
            </Link>
            <Link
              href={"/template3"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div>

        <div className="template4  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic4} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            SIMPLE
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="#"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Select
            </Link>
            <Link
              href={"/template4"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div>

        <div className="template5  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic5} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            MODERATE
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="#"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Select
            </Link>
            <Link
              href={"/template5"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div>

        <div className="template6  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic6} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            SOOTHING
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="#"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Select
            </Link>
            <Link
              href={"/template6"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div>

         <div className="template7  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic7} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            BEGINNER
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="#"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Select
            </Link>
            <Link
              href={"/template7"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div>

           <div className="template8  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic8} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            REACT
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="#"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Select
            </Link>
            <Link
              href={"/template8"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div>  







      </div>
    </>
  );
}

export default Page;
