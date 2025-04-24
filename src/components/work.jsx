import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Blurcontext } from "../main";
import { useContext } from "react";
export default function Work() {
  const { work, setWork, page, setPage } = useContext(Blurcontext);
  return (
    <section
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-100 max-[442px]:w-[90%] h-100 z-50 
        flex flex-col justify-center items-center gap-3 text-xl rounded-2xl"
    >
      <IoClose
        className="absolute top-4 right-5 text-4xl"
        onClick={() => {
          setWork(false);
        }}
      />
      <h1 className="pb-5">Let's work together</h1>
      <a
        className="text-black bg-white border-2 border-black rounded-lg px-10 py-4 font-bold shadow-[5px_5px_0px_#000]
         transition-all duration-300 hover:bg-yellow-300 hover:border-black hover:shadow-[5px_5px_0px_#000]
         active:shadow-none active:translate-y-1 w-fit flex items-center gap-2 mb-4 text-[1rem]"
        href="https://wa.me/213560869608"
        target="_blank"
      >
        <FaSquareWhatsapp className="text-2xl text-green-600" /> WhatsApp
      </a>
      <a
        className="text-black bg-white border-2 border-black rounded-lg px-10 py-4 font-bold shadow-[5px_5px_0px_#000]
         transition-all duration-300 hover:bg-yellow-300 hover:border-black hover:shadow-[5px_5px_0px_#000]
         active:shadow-none active:translate-y-1 w-fit flex items-center gap-2 text-[1rem]"
        href="https://www.upwork.com/freelancers/~01eb480f5c441bf58d"
        target="_blank"
      >
        <FaSquareUpwork className="text-2xl" /> Upwork
      </a>
    </section>
  );
}
