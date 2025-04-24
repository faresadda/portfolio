import title from "../../public/title.png";
import mark from "../../public/mark.png";
import { useContext } from "react";
import { Context, Blurcontext } from "../main";
import { FaGithub } from "react-icons/fa";
export default function Projects({ index }) {
  const { projectsList, skillsList, servicesList } = useContext(Context);
  const { work, setWork,pageexist,setPageexist } = useContext(Blurcontext);
  return (
    <section className={`z-10 bg-gray-50 relative p-20 pt-35 min-h-screen flex flex-col justify-center max-[700px]:px-8 ${(work || pageexist!==null) && "blur-xs"}`}>
      <div className="bg-gray-100 p-10 rounded-xl shadow-md flex flex-col justify-center items-center gap-5">
        <div className="flex items-center gap-2">
          <img src={mark} className="w-7" loading="lazy"/>
          <h3 className="text-xl font-semibold">{projectsList[index].name}</h3>
        </div>
        <img src={projectsList[index].src} className="rounded-2xl my-5 w-[100%]" loading="lazy"/>
        <p className="text-gray-700 px-10 text-center max-[700px]:px-0">{projectsList[index].details}</p>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <div className="flex gap-5 items-center">
            {projectsList[index].tools.map((tool,index)=>{
              return(  <div key={index} className="text-2xl">{tool}</div>)})}
          </div>
          <div className="flex items-center gap-10">
          <a href={projectsList[index].link} className="text-black bg-yellow-300 border-2 border-black rounded-lg px-4 py-2 font-bold shadow-[5px_5px_0px_#000]
                                  transition-all duration-300 hover:bg-white hover:border-black hover:shadow-[5px_5px_0px_#000]
                                active:bg-white active:shadow-none active:translate-y-1 w-fit" target="_blank">View Project</a>
          <a href={projectsList[index].github} target="_blank"><FaGithub className="text-4xl"/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
