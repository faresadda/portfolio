import { Link } from "react-router-dom";
import blacklogo from "../../public/blacklogo.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState, useEffect, useReducer, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Blurcontext } from "../main";
export default function Navbar({ projects, contact, dispatch, list }) {
  const { work, setWork, pageexist, setPageexist } = useContext(Blurcontext);
  const [menu, setMenu] = useState(false);
  return (
    <section
      className={`flex w-full justify-between items-center fixed px-8 py-4 z-50 ${
        (work || pageexist !== null) && "blur-xs"
      } ${menu ? "bg-none" : "bg-gray-100 transition-colors delay-1000"}`}
    >
      <img
        src={blacklogo}
        className={`w-15 ${
          menu ? "opacity-0" : "opacity-100 transition-opacity delay-1000"
        }`}
        loading="lazy"
      />
      <ul
        className={`list flex justify-between w-[60%] font-[500] items-center transition-[right] duration-1000 
                ${
                  menu ? "right-0" : "right-[-200%]"
                } max-[900px]:w-[400px] max-[550px]:w-[75%] z-50`}
      >
        <Link
          to="/"
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" });
            dispatch({ type: "home" });
            setMenu(false);
          }}
          className={`p-2 text-[1rem] font-bold ${list.name === "home" && "section"}`}
        >
          HOME
        </Link>
        <Link
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" });
            dispatch({ type: "about" });
            setMenu(false);
          }}
          to="/about"
          className={`p-2 font-bold ${
            list.name === "about" && "section"
          }`}
        >
          ABOUT
        </Link>
        <Link
          to="/skills"
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" });
            dispatch({ type: "skills" });
            setMenu(false);
          }}
          className={`p-2 font-bold ${
            list.name === "skills" && "section"
          }`}
        >
          SKILLS
        </Link>
        <Link
          to="/services"
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" });
            dispatch({ type: "services" });
            setMenu(false);
          }}
          className={`p-2 font-bold ${
            list.name === "services" && "section"
          }`}
        >
          SERVICES
        </Link>
        <Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              projects.current.scrollIntoView({ behavior: "smooth" });
            }, 100);
            dispatch({ type: "projects" });
            setMenu(false);
          }}
          className={`p-2 font-bold ${
            list.name === "projects" && "section"
          }`}
        >
          PROJECTS
        </Link>
        <li
          onClick={() => {
            contact.current.scrollIntoView({ behavior: "smooth" });
            dispatch({ type: "contact" });
            setMenu(false);
          }}
          className={`p-2 font-bold ${
            list.name === "contact" && "section"
          }`}
        >
          CONTACT
        </li>
        {menu && (
          <IoClose
            className={`close absolute top-8 right-8 z-50 text-2xl ${
              menu ? "block" : "hidden"
            }`}
            onClick={() => {
              setMenu(false);
            }}
          />
        )}
        {menu && <img src={blacklogo} className="absolute top-8 left-8 w-15" />}
      </ul>
      <div className="flex items-center gap-10">
        <button
          className={`text-black bg-yellow-300 border-2 border-black rounded-lg px-4 py-2 font-bold shadow-[5px_5px_0px_#000]
                                  transition-all duration-300 hover:bg-white hover:border-black hover:shadow-[5px_5px_0px_#000]
                                active:bg-white active:shadow-none active:translate-y-1 w-fit ${
                                  menu
                                    ? "opacity-0"
                                    : "opacity-100 transition-opacity delay-1000"
                                }`}
          onClick={() => {
            setWork(true);
          }}
        >
          Let's work
        </button>
        <TiThMenu
          className={`menu hidden text-2xl ${
            menu ? "opacity-0" : "opacity-100 transition-opacity delay-1000"
          }`}
          onClick={() => {
            setMenu(true);
          }}
        />
      </div>
    </section>
  );
}
