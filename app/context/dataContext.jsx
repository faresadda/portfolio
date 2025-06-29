"use client";

import { createContext, useContext, useState, useReducer } from "react";
import {
  FaGlobe,
  FaShoppingCart,
  FaComments,
  FaDatabase,
  FaVideo,
  FaPaintBrush,
  FaMobileAlt,
  FaCode,
  FaBolt,
  FaServer,
  FaBug,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiGit,
  SiGithub,
  SiC,
  SiPython,
} from "react-icons/si";

export const DataContext = createContext();
export const useDataContext = () => {
  return useContext(DataContext);
};

export default function ContextProvider({ children }) {

  const [title, dispatch] = useReducer(reducer, { name: "home" });
  function reducer(title, action) {
    switch (action.type) {
      case "home": {
        return { name: "home" };
      }
      case "skills": {
        return { name: "skills" };
      }
      case "services": {
        return { name: "services" };
      }
      case "projects": {
        return { name: "projects" };
      }
      case "blog": {
        return { name: "blog" };
      }
    }
  }

  const [work, setWork] = useState(false);

  return (
    <DataContext.Provider
      value={{ title, dispatch, work, setWork }}
    >
        {children}
    </DataContext.Provider>
  );
}
