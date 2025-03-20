import name from "../../public/name.png";
import down from "../../public/down.png";
import title from "../../public/title.png";
import { useContext, useRef, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { Blurcontext } from "../main";
import pin from "../../public/pin.png"
import airplane from "../../public/airplane.png"

export default function Content({ setIndex,setIndexskill,setIndexservice,home,about,skills,services,projects,dispatch }) {
  const { projectsList, skillsList, servicesList } = useContext(Context);
  const { work, setWork,page,setPage } = useContext(Blurcontext);
  const newdate = new Date().getTime()
  const olddate = new Date("2024-12-07T00:00:00Z").getTime()
  const def = ( newdate - olddate ) / ( 1000 * 60 * 60 * 24 * 30 )
  let exp
  if(Math.trunc(def)<=12){
    exp = `${Math.trunc(def)} month`
  }
  else {exp = `${Math.trunc(Math.trunc(def)/12)} ans`}


  const typingText = "WHO AM I ?";
  const [tap, setTap] = useState("");

    useEffect(() => {
      let index = 0;
      let repeat = false;
      let isMounted = true;
  
      const startTyping = async () => {
        while (isMounted) {
          setTap((prev)=>{ return `${typingText.slice(0, index)} |`});
  
          if (!repeat) {
            index++;
            if (index === typingText.length) {
              await new Promise((resolve) => setTimeout(resolve, 2000)); 
              repeat = true;
            }
          } else {
            index--;
            if (index == 0) {
              await new Promise((resolve) => setTimeout(resolve, 2000));
              repeat = false;
            }
          }
  
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      };
  
      startTyping();
  
      return () => {
        isMounted = false;
      };
    }, []);
  return (
    <div className={`bg-gray-50 ${(work || page!==null) && "blur-xs"}`}>
      {/* Home */}
      <section className="bg-gray-900 text-white shadow-2xl min-h-screen pt-60" ref={home}>
        <div className="ml-40 name">
          <img src={name} className="w-96" loading="lazy"/>
          <div className="flex items-center gap-10 mt-10 ml-10 w-fit" onClick={()=>{about.current.scrollIntoView({behavior:"smooth"})}}>
            <button className="bg-gray-100 py-5 w-50 font-extrabold rounded-3xl z-20 text-gray-900 relative text-xl shadow-gray-900 shadow-2xs">
              {tap}
            </button>
            <img src={down} className="direction" loading="lazy"/>
          </div>
        </div>
        <img src={airplane} className="w-50 max-[1100px]:w-30 absolute transform top-1/2 -translate-y-1/2 right-[20%] max-[900px]:right-[10%] 
        max-[700px]:top-[85%] max-[700px]:left-1/2 max-[700px]:-translate-x-1/2" />
        <div className="w-1/2 h-full bg-white opacity-10 absolute top-0 right-0"></div>
      </section>
      <hr className="text-gray-400"/>
      {/* About */}
      <section
        className="relative p-20 min-h-screen flex flex-col justify-center max-[850px]:px-8"
        ref={about}
      >
        <div className="flex flex-col relative z-10">
          <div className="flex items-center justify-center gap-6 mb-10">
            <h2 className="text-[2rem] font-extrabold text-gray-800 tracking-wide">
              ABOUT
            </h2>
            <img src={title} className="title" loading="lazy"/>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            I’m a dedicated Front-End Developer with deep expertise in React,
            Tailwind CSS, JavaScript, and modern web technologies. My primary
            focus is on designing and developing responsive, high-performance
            web applications that deliver a smooth and engaging user experience.
            I strive to write clean, structured, and maintainable code, ensuring
            that applications are both scalable and easy to enhance over time.
            My proficiency in front-end frameworks and styling methodologies
            allows me to create visually appealing, fast-loading, and accessible
            interfaces that meet modern web standards
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            With a background in Automation and Control Systems, I have
            developed a strong analytical mindset and problem-solving skills,
            which help me approach web development with a logical and systematic
            perspective. This technical foundation enables me to integrate
            intelligent automation and efficient solutions into web
            applications, optimizing functionality and performance. My
            development approach is a balance between technical precision and
            intuitive UI/UX design, ensuring that applications are not only
            visually compelling but also user-friendly, efficient, and highly
            functional
          </p>
          <Link
            to="/about"
            className="bg-gray-900 w-50 text-white p-4 rounded-2xl mt-6! flex justify-center mx-auto"
            onClick={()=>{dispatch({type:'about'})}}
          >
            MORE
          </Link>
        </div>
        <div className="absolute w-full h-full bg-yellow-300 top-0 right-0 z-0 about"></div>
        <img src={pin} className="w-[3rem] absolute top-5 left-5 shadow-gray-600 shadow-[10px 10px 10px 10px black]" loading="lazy"/>
      </section>
      
      <hr className="text-gray-400"/>
      {/* Skills */}
      <section className="p-20 flex flex-col justify-center min-h-screen relative max-[850px]:px-8" ref={skills}>
        <div className="flex items-center justify-center gap-6 mb-10">
          <h2 className="text-[2rem] font-extrabold text-gray-800 tracking-wide">
            SKILLS
          </h2>
          <img src={title} className="title" loading="lazy"/>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-8 text-center mb-10 max-[850px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {skillsList.map((skill,index) => (
            <div
              key={skill.id}
              className="flex flex-col items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 hover:duration-400 transition-all"
              onClick={()=>{setPage('skills');setIndexskill(index)}}
            >
              <span className="skill text-4xl">{skill.icon}</span>
              <strong className="text-lg mt-2">{skill.name}</strong>
              <p className="text-sm text-gray-600 text-center">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        <Link
          to="/skills"
          className="bg-gray-900 w-50 text-white p-4 rounded-2xl justify-center flex mx-auto"
          onClick={()=>{dispatch({type:'skills'})}}
        >
          MORE
        </Link>
        <img src={pin} className="w-[3rem] absolute top-5 left-5" loading="lazy"/>
      </section>
      
      <hr className="text-gray-400"/>
      {/* Services */}
      <section className="p-20 flex flex-col justify-center min-h-screen relative max-[850px]:px-8" ref={services}>
        <div className="flex items-center justify-center gap-6 mb-10">
          <h2 className="text-[2rem] font-extrabold text-gray-800 tracking-wide">
            SERVICES
          </h2>
          <img src={title} className="title left-[200px]!" loading="lazy"/>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-10 max-[850px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {servicesList.map((service,index) => (
            <div
              key={service.id}
              className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-110 hover:duration-400"
              onClick={()=>{setPage('services');setIndexservice(index)}}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-700 mt-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-500 mt-2 text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-center">
          <Link
            to="/services"
            className="bg-gray-900 w-50 text-white p-4 rounded-2xl mt-6 text-center"
            onClick={()=>{dispatch({type:'services'})}}
          >
            MORE
          </Link>
          <button
            className="bg-yellow-300 w-50 text-gray-900 p-4 rounded-2xl mt-6"
            onClick={() => {
              setWork(true);
            }}
          >
            L'ets Work
          </button>
        </div>
        <img src={pin} className="w-[3rem] absolute top-5 left-5" loading="lazy"/>
      </section>
      <hr className="text-gray-400"/>
      {/* Projects */}
      <section
        className="z-10 relative p-20 min-h-screen flex flex-col justify-center max-[850px]:px-8"
        ref={projects}
      >
        <div className="flex items-center justify-center gap-6 mb-6">
          <h2 className="text-[2rem] font-extrabold text-gray-800 tracking-wide">
            PROJECTS
          </h2>
          <img src={title} className="title left-[200px]!" loading="lazy"/>
        </div>
        <div className="flex justify-center gap-10 font-semibold text-gray-800">
          <p>Projects : + {projectsList.length}</p>
          <p>Experience : + {exp}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 my-10 max-[850px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {projectsList.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center relative"
            >
              <img src={project.src} className="w-50 rounded-xl" loading="lazy"/>
              <h3 className="text-xl font-semibold text-gray-700 mt-4 text-center">
                {project.name}
              </h3>
              <p className="text-gray-500 mt-2 text-sm text-center">
                {project.description}
              </p>
              <Link
                to="/projects"
                onClick={() => {
                  setIndex(index);
                  dispatch({type:'projects'});
                  scrollTo({top:0,behavior:'smooth'});
                }}
                className="text-blue-500 mt-4 text-sm underline"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
        <img src={pin} className="w-[3rem] absolute top-5 left-5" loading="lazy"/>
      </section>

    </div>
  );
}
