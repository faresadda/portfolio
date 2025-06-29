"use client";

import { useContext } from "react";
import { useDataContext } from "../context/dataContext";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState, useEffect, useReducer } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const { title, dispatch,work, setWork } = useDataContext();

  const scrollToContact = () => {
    const footerElement = document.querySelector("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`${work ? 'blur-xs' : 'blur-none'} flex w-full justify-between gap-5 items-center fixed top-0 px-8 py-4 z-50 text-white 
         ${menu ? "bg-none" : " bg-white/10 backdrop-blur-3xl transition-[background] delay-1000"}`}
    >
      <img
        src="/logo.png"
        className={`w-15 ${
          menu ? "opacity-0" : "opacity-100 transition-opacity delay-1000"
        }`}
        loading="lazy"
      />
      <ul
        className={`flex justify-between gap-5 w-[75%] lg:w-[65%] xl:w-[55%] items-center transition-[top] duration-1000 
                ${menu ? "top-0" : "top-[-1000%]"} z-50 max-[970px]:bg-white/10 max-[970px]:backdrop-blur-3xl max-[970px]:w-full 
                max-[970px]:left-0 max-[970px]:fixed max-[970px]:flex-col max-[970px]:py-5`}>
        <Link
          href="/"
          onClick={() => {
            dispatch({ type: "home" });
            setMenu(false);
          }}
          className={` rounded-lg px-4 py-2 font-bold shadow-[4px_4px_0px_#fff] transition-shadow duration-300
          active:bg-black active:shadow-none active:translate-y-1 active:text-white border ${title.name === "home" ? "border-white" : 
          "border-transparent shadow-transparent hover:bg-yellow-300 hover:shadow-white hover:text-gray-800 hover:border-white"}`}>
          HOME
        </Link>
        
        <Link
          href="/skills"
          onClick={() => {
            dispatch({ type: "skills" });
            setMenu(false);
          }}
          className={` rounded-lg px-4 py-2 font-bold shadow-[4px_4px_0px_#fff] transition-shadow duration-300
            active:bg-black active:shadow-none active:translate-y-1 active:text-white border ${title.name === "skills" ? "border-white" : 
            "border-transparent shadow-transparent hover:bg-yellow-300 hover:shadow-white hover:text-gray-800 hover:border-white"}`}>
          SKILLS
        </Link>
        <Link
          href="/services"
          onClick={() => {
            dispatch({ type: "services" });
            setMenu(false);
          }}
          className={` rounded-lg px-4 py-2 font-bold shadow-[4px_4px_0px_#fff] transition-shadow duration-300
            active:bg-black active:shadow-none active:translate-y-1 active:text-white border ${title.name === "services" ? "border-white" : 
            "border-transparent shadow-transparent hover:bg-yellow-300 hover:shadow-white hover:text-gray-800 hover:border-white"}`}>
          SERVICES
        </Link>
        <Link
          href="/projects"
          onClick={() => {
            dispatch({ type: "projects" });
            setMenu(false);
          }}
          className={` rounded-lg px-4 py-2 font-bold shadow-[4px_4px_0px_#fff] transition-shadow duration-300
            active:bg-black active:shadow-none active:translate-y-1 active:text-white border ${title.name === "projects" ? "border-white" : 
            "border-transparent shadow-transparent hover:bg-yellow-300 hover:shadow-white hover:text-gray-800 hover:border-white"}`}>
          PROJECTS
        </Link>
        <div
          onClick={() => {
            setMenu(false);
            scrollToContact()
          }}
          className={`cursor-pointer rounded-lg px-4 py-2 font-bold shadow-[4px_4px_0px_#fff] transition-shadow duration-300
            active:bg-black active:shadow-none active:translate-y-1 active:text-white border ${title.name === "contatc" ? "border-white" : 
            "border-transparent shadow-transparent hover:bg-yellow-300 hover:shadow-white hover:text-gray-800 hover:border-white"}`}>
          CONTACT
        </div>
        {menu && (
          <IoClose
            className={`absolute top-6 right-8 z-50 text-3xl ${
              menu ? "block" : "hidden"
            }`}
            onClick={() => {
              setMenu(false);
            }}
          />
        )}
      </ul>
      <div className="flex items-center gap-10">
        <button
          className={`border border-white rounded-lg px-4 py-2 font-bold shadow-[4px_4px_0px_#fff] transition-all duration-300
                       hover:bg-yellow-300 hover:text-gray-800 hover:shadow-[4px_4px_0px_#fff] active:shadow-none
                       active:translate-y-1 ${ menu ? "opacity-0" : "opacity-100 transition-opacity delay-1000"}`}
          onClick={() => {
            setWork(true);
          }}
        >
          Let's work
        </button>
        <TiThMenu
          className={`hidden max-[970px]:block text-2xl ${menu ? "opacity-0" : "opacity-100 transition-opacity delay-1000"}`}
          onClick={() => {
            setMenu(true);
          }}
        />
      </div>
    </section>
  );
}
