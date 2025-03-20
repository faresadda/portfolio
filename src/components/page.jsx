import { useContext } from "react";
import mark from '../../public/mark.png'
import { Context } from "../main";
import { IoClose } from "react-icons/io5";
import { Blurcontext } from "../main";

export default function Page({indexskill,indexservice}) {
    const {projectsList,skillsList,servicesList}=useContext(Context)
    const { work, setWork,page,setPage } = useContext(Blurcontext);
  return (
    <page className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] px-4 py-20 bg-white rounded-2xl shadow-lg w-[50%] 
    max-[1110px]:w-[70%] max-[657px]:w-[90%]">
        <IoClose className="absolute top-4 right-5 text-3xl" onClick={()=>{setPage(null)}}/>
        {page==='skills' && <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-5">
              <img src={mark} className="w-8" loading="lazy" />
              <h3 className="text-lg font-semibold">{skillsList[indexskill].name}</h3>
            </div>
            <div className="mt-3 p-2  text-sm text-gray-700 text-center">
              {skillsList[indexskill].detail}
            </div>
            <div className="flex justify-center gap-5 w-full">
              <div className="mt-2 bg-gray-200 rounded-full h-2 w-[60%]">
                <div
                  className="bg-yellow-300 h-2 rounded-full"
                  style={{ width: `${skillsList[indexskill].proficiency}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {skillsList[indexskill].proficiency}% Proficiency
              </p>
            </div>
        </div>}
        


        {page==='services' && <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-5">
              <img src={mark} className="w-7" loading="lazy" />
              <h3 className="text-xl font-semibold">{servicesList[indexservice].title}</h3>
            </div>
            <p className="text-gray-700 mt-2 text-center">{servicesList[indexservice].details}</p>
        </div>}
        
    </page>
  );
}
