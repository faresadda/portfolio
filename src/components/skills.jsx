import title from "../../public/title.png";
import { useContext, useState } from "react";
import { Context, Blurcontext } from "../main";
import mark from "../../public/mark.png"
export default function Skills() {
  const { projectsList, skillsList, servicesList } = useContext(Context);
  const { work, setWork,pageexist,setPageexist } = useContext(Blurcontext);

  return (
    <section
      className={`bg-gray-50 p-20 pt-30  flex flex-col justify-center min-h-screen max-[500px]:px-8 ${(work || pageexist!==null) && "blur-xs"}`}>
      <div className="flex items-center justify-center gap-6 mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          SKILLS
        </h2>
        <img src={title} className="title" loading="lazy"/>
      </div>
      <div className="grid grid-cols-2 gap-8 text-center max-[850px]:grid-cols-1">
        {skillsList.map((skill) => (
          <div
            key={skill.id}
            className="p-4 bg-gray-100 rounded-2xl shadow-lg flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-105 py-10"
          >
            <div className="flex items-center gap-5">
              <img src={mark} className="w-8" loading="lazy"/>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
            <div className="mt-3 p-2  text-sm text-gray-700">
              {skill.detail}
            </div>
            <div className="flex justify-center gap-5 w-full">
              <div className="mt-2 bg-gray-200 rounded-full h-2 w-[60%]">
                <div
                  className="bg-yellow-300 h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {skill.proficiency}% Proficiency
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
