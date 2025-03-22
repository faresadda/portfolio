import title from "../../public/title.png";
import mark from "../../public/mark.png";
import { useContext } from "react";
import { Context, Blurcontext } from "../main";
import { IoEyeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
export default function Projects({ index }) {
  const { projectsList, skillsList, servicesList } = useContext(Context);
  const { work, setWork,pageexist,setPageexist } = useContext(Blurcontext);
  return (
    <section className={`z-10 bg-gray-50 relative p-20 pt-50 min-h-screen flex flex-col justify-center max-[700px]:px-8 ${(work || pageexist!==null) && "blur-xs"}`}>
      <div className="bg-gray-100 p-10 rounded-xl shadow-md flex flex-col justify-center items-center gap-5">
        <div className="flex items-center gap-2">
          <img src={mark} className="w-7" loading="lazy"/>
          <h3 className="text-xl font-semibold">{projectsList[index].name}</h3>
        </div>
        <img src={projectsList[index].src} className="py-10 w-[100%]" loading="lazy"/>
        <p className="text-gray-700 px-10 text-center max-[700px]:px-0">{projectsList[index].details}</p>
        <div className="flex gap-5">
        {projectsList[index].tools.map(tool=>{
          return(
            <div className="bg-yellow-300 text-gray-800 p-2 rounded-2xl">{tool}</div>
          )
        })}
        </div>
        <div className="flex items-center justify-center gap-10">
          <a href={projectsList[index].link} className="text-blue-600 flex items-center gap-2 text-[1rem]" target="_blank">View Project<IoEyeSharp /></a>
          <a href={projectsList[index].github} className="text-xl" target="_blank"><FaGithub /></a>
        </div>
      </div>
    </section>
  );
}
