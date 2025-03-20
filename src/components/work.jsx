import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import airplane from '../../public/airplane.png'
import { IoClose } from "react-icons/io5";
import { Blurcontext } from "../main";
import { useContext } from "react";
export default function Work(){
    const { work, setWork,page,setPage } = useContext(Blurcontext);
    return(
        <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-100 h-100 z-50 
        flex flex-col justify-center items-center gap-3 text-xl rounded-2xl">
            <IoClose className="absolute top-4 right-5 text-4xl" onClick={()=>{setWork(false)}}/>
            <img src={airplane} className="w-30" loading="lazy"/>
            <h1 className="pb-5">L'ets work together</h1>
            <a href='https://wa.me/213560869608' target="_blank" className="flex items-center gap-2"><FaSquareWhatsapp className="text-2xl text-green-600"/> WhatsApp</a>
            <a href="https://www.upwork.com/freelancers/~01eb480f5c441bf58d" target="_blank" className="flex items-center gap-2"><FaSquareUpwork className="text-2xl"/> Upwork</a>
        </section>
    )
}