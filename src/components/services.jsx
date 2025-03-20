import title from "../../public/title.png";
import mark from '../../public/mark.png'
import { useContext } from "react";
import { Context,Blurcontext } from "../main";
export default function Services() {
  const {projectsList,skillsList,servicesList}=useContext(Context)
  const { work, setWork,page,setPage } = useContext(Blurcontext);
  return (
    <section className={`z-10 relative px-20 pt-50 flex flex-col justify-center min-h-screen py-20 bg-gray-50 max-[500px]:px-8 ${(work || page!==null) && 'blur-xs'}`}>
              <div className="flex items-center justify-center gap-6 mb-6">
                <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">SERVICES</h2>
                <img src={title} className="title left-[200px]!" loading="lazy"/>
              </div>
              <div className="grid grid-cols-2 gap-10 my-10 max-[1115px]:grid-cols-1">
                {servicesList.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white px-6 rounded-xl shadow-md py-15"
                  >
                    <div className="flex items-center gap-2 mb-5">
                        <img src={mark} className="w-7" loading="lazy"/>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 mt-2">{service.details}</p>
                  </div>
                ))}
              </div>
              <button className="bg-gray-900 w-50 text-white p-4 rounded-2xl" onClick={()=>{setWork(true)}}>
               L'ets Work
              </button>
            </section>
  );
}
