"use client";

import { FaSquareWhatsapp, FaSquareUpwork } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useDataContext } from "../context/dataContext";

export default function Work() {
  const { work, setWork } = useDataContext();

  return (
    <section
      className={`
        ${work ? "flex" : "hidden"}
        fixed top-0 left-0 w-screen h-screen z-[9999]
        items-center justify-center
        bg-black/50 backdrop-blur-[4px]
        transition-all duration-300
      `}
    >
      <div
        className="
          relative bg-gradient-to-br from-[#18181b]/90 via-[#23272f]/90 to-[#18181b]/90
          rounded-3xl shadow-2xl border border-gray-700/60
          flex flex-col items-center justify-center gap-6
          px-8 py-10 pt-20 min-w-[320px] max-w-[95vw] w-[400px]
          animate-fade-in-up
          backdrop-blur-md
        "
        style={{ boxShadow: "0 8px 40px 0 rgba(0,0,0,0.65)" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400  text-3xl bg-black/30 rounded-full p-2 backdrop-blur-md shadow-md border border-gray-700/40"
          onClick={() => setWork(false)}
          aria-label="Close"
        >
          <IoClose />
        </button>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2 text-center drop-shadow-lg tracking-tight">
          Let's work together
        </h1>
        <p className="text-gray-300 text-center mb-4 text-base max-w-xs">
          Contact me directly on WhatsApp or Upwork for collaboration,
          freelance, or project inquiries.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <a
            className="flex items-center justify-center gap-3 bg-green-200 text-green-700 p-4 font-bold rounded-xl "
            href="https://wa.me/213560869608"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareWhatsapp className="text-2xl" /> WhatsApp
          </a>
          <a
            className="flex items-center justify-center gap-3 bg-gray-300 text-black font-bold p-4 rounded-xl"
            href="https://www.upwork.com/freelancers/~01eb480f5c441bf58d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareUpwork className="text-2xl" /> Upwork
          </a>
        </div>
      </div>
    </section>
  );
}
