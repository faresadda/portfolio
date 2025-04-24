import name from "../../public/name.png";
import down from "../../public/down.png";
import title from "../../public/title.png";
import { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { Blurcontext } from "../main";
import pin from "../../public/pin.png"
import { BsFileEarmarkPdf } from "react-icons/bs";
import Loader from "./animation";

export default function Content({
  setIndex,
  setIndexskill,
  setIndexservice,
  home,
  about,
  skills,
  services,
  projects,
  dispatch,
}) {
  const { projectsList, skillsList, servicesList } = useContext(Context);
  const { work, setWork, pageexist, setPageexist } = useContext(Blurcontext);
  const newdate = new Date().getTime();
  const olddate = new Date("2024-12-07T00:00:00Z").getTime();
  const def = (newdate - olddate) / (1000 * 60 * 60 * 24 * 30);
  let exp;
  if (Math.trunc(def) <= 12) {
    exp = `${Math.trunc(def)} month`;
  } else {
    exp = `${Math.trunc(Math.trunc(def) / 12)} ans`;
  }

  const typingText = "WHO AM I ?";
  const [tap, setTap] = useState("");

  useEffect(() => {
    let index = 0;
    let repeat = false;
    let isMounted = true;

    const startTyping = async () => {
      while (isMounted) {
        setTap((prev) => {
          return `${typingText.slice(0, index)} |`;
        });

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
    <div className={`bg-gray-50 ${(work || pageexist !== null) && "blur-xs"}`}>
      {/* Home */}
      <section
        className="bg-gray-900 text-white shadow-2xl h-screen pt-30 flex justify-around items-center px-10 max-[340px]:px-0 flex-wrap gap-10"
        ref={home}>
        <div className="name">
          <img src={name} className="max-w-80" loading="lazy" />
          <div
            className="flex items-center gap-10 mt-10 ml-10 w-fit"
            onClick={() => {
              about.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <button className="text-black bg-white border-2 border-black rounded-lg px-10 py-4 font-bold shadow-[5px_5px_0px_#000]
         transition-all duration-300 hover:bg-yellow-300 hover:border-black hover:shadow-[5px_5px_0px_#000]
          active:bg-white active:shadow-none active:translate-y-1 w-[12rem]">
              {tap}
            </button>
            <img src={down} className="direction" loading="lazy" />
          </div>
        </div>
        <Loader />
        <div className="w-1/2 h-screen bg-white opacity-10 absolute top-0 right-0"></div>
      </section>

      <hr className="text-gray-400" />

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
            <img src={title} className="title" loading="lazy" />
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            I’m a dedicated Full-Stack Developer with deep expertise in both
            React JS, Tailwind CSS, JavaScript for the front end and Node JS,
            Express JS, and MongoDB for the back end. My primary focus is on
            designing and developing responsive, high-performance web
            applications that offer a smooth and engaging user experience. I
            strive to write clean, structured, and maintainable code, ensuring
            that applications are scalable and easy to enhance over time, while
            also ensuring robust back-end functionality and seamless API
            integrations. My proficiency in front-end frameworks and back-end
            technologies allows me to build complete solutions that are not only
            visually appealing and fast-loading but also efficient, secure, and
            scalable. Whether it’s crafting dynamic user interfaces or building
            secure APIs and database structures, I ensure that both sides of the
            application are optimized to meet modern web standards.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            With a background in Automation and Control Systems, I have
            developed strong analytical and problem-solving skills that help me
            approach web development in a logical and systematic way. This
            technical foundation allows me to integrate intelligent automation,
            optimize functionality, and create efficient solutions on both the
            front and back end, balancing technical precision with intuitive
            UI/UX design. My goal is to create applications that are not only
            visually compelling but also user-friendly, high-performing, and
            highly functional.
          </p>
          <div className="flex justify-center items-center gap-10 mt-10">
            <Link to="/about"
              onClick={() => {
                dispatch({ type: "about" });
                scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-black bg-yellow-300 border-2 border-black rounded-lg px-10 py-2 font-bold shadow-[5px_5px_0px_#000]
                   transition-all duration-300 hover:bg-white hover:border-black hover:shadow-[5px_5px_0px_#000]
                 active:bg-white active:shadow-none active:translate-y-1 w-fit">
              More
            </Link>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center font-bold text-[1rem]">
              View CV <BsFileEarmarkPdf className="text-xl"/>
            </a>
          </div>
  
        </div>
        <div className="absolute w-full h-full bg-yellow-300 top-0 right-0 z-0 about"></div>
        <img
          src={pin}
          className="w-[2.5rem] absolute top-5 left-5 shadow-gray-600 shadow-[10px 10px 10px 10px black]"
          loading="lazy"
        />
      </section>

      <hr className="text-gray-400" />
      {/* Skills */}
      <section
        className="p-20 flex flex-col justify-center min-h-screen relative max-[850px]:px-8"
        ref={skills}
      >
        <div className="flex items-center justify-center gap-6 mb-10">
          <h2 className="text-[2rem] font-extrabold text-gray-800 tracking-wide">
            SKILLS
          </h2>
          <img src={title} className="title" loading="lazy" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 text-center mb-10 max-[850px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {skillsList.map((skill, index) => (
            <div
              key={skill.id}
              className="flex flex-col items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 hover:duration-400 transition-all"
              onClick={() => {
                setPageexist("skills");
                setIndexskill(index);
              }}
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
          className="text-black bg-yellow-300 border-2 border-black rounded-lg px-10 py-2 font-bold shadow-[5px_5px_0px_#000]
         transition-all duration-300 hover:bg-white hover:border-black hover:shadow-[5px_5px_0px_#000]
          active:bg-white active:shadow-none active:translate-y-1 w-fit flex justify-center mx-auto mt-10"
          onClick={() => {
            dispatch({ type: "skills" });
            scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          More
        </Link>
        <img
          src={pin}
          className="w-[2.5rem] absolute top-5 left-5"
          loading="lazy"
        />
      </section>

      <hr className="text-gray-400" />

      {/* Services */}
      <section
        className="p-20 flex flex-col justify-center min-h-screen relative max-[850px]:px-8"
        ref={services}
      >
        <div className="flex items-center justify-center gap-6 mb-10">
          <h2 className="text-[2rem] font-extrabold text-gray-800 tracking-wide">
            SERVICES
          </h2>
          <img src={title} className="title left-[200px]!" loading="lazy" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-10 max-[850px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-110 hover:duration-400"
              onClick={() => {
                setPageexist("services");
                setIndexservice(index);
              }}
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
        <div className="flex gap-10 justify-center mt-10 flex-wrap">
          <Link
            to="/services"
            className="text-black bg-yellow-300 border-2 border-black rounded-lg px-10 py-2 font-bold shadow-[5px_5px_0px_#000]
         transition-all duration-300 hover:bg-white hover:border-black hover:shadow-[5px_5px_0px_#000]
          active:bg-white active:shadow-none active:translate-y-1 w-fit "
            onClick={() => {
              dispatch({ type: "services" });
              scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            More
          </Link>
          <button
            className="text-black bg-yellow-300 border-2 border-black rounded-lg px-10 py-2 font-bold shadow-[5px_5px_0px_#000]
            transition-all duration-300 hover:bg-white hover:border-black hover:shadow-[5px_5px_0px_#000]
             active:bg-white active:shadow-none active:translate-y-1 w-fit "
            onClick={() => {
              setWork(true);
            }}
          >
            L'ets work
          </button>
        </div>
        <img
          src={pin}
          className="w-[2.5rem] absolute top-5 left-5"
          loading="lazy"
        />
      </section>

      <hr className="text-gray-400" />

      {/* Projects */}
      <section
        className="z-10 relative p-20 min-h-screen flex flex-col justify-center max-[850px]:px-8"
        ref={projects}
      >
        <div className="flex items-center justify-center gap-6 mb-6">
          <h2 className="text-[2rem] font-extrabold text-gray-800 tracking-wide">
            PROJECTS
          </h2>
          <img src={title} className="title left-[200px]!" loading="lazy" />
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
              <img
                src={project.src}
                className="w-50 rounded-xl"
                loading="lazy"
              />
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
                  dispatch({ type: "projects" });
                  scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-black bg-white border-2 border-black rounded-lg px-4 py-2 font-bold shadow-[5px_5px_0px_#000]
                                  transition-all duration-300 hover:bg-yellow-300 hover:border-black hover:shadow-[5px_5px_0px_#000]
                                active:bg-yellow-300 active:shadow-none active:translate-y-1 w-fit mt-5"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
        <img
          src={pin}
          className="w-[2.5rem] absolute top-5 left-5"
          loading="lazy"
        />
      </section>
    </div>
  );
}
