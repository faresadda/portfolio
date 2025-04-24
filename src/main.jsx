import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Outlet,useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Content from "./components/content";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Services from "./components/services";
import Work from "./components/work";
import up from "../public/up.png";
import { useState,useRef,useEffect,useContext,createContext,useReducer } from "react"
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaBolt, FaBug, FaShoppingCart, FaComments, FaGlobe,FaDatabase, FaVideo } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiGit, SiGithub, SiC, SiPython,SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

import Page from "./components/page";


export const Context=createContext()
export const Blurcontext=createContext()
export default function App() {
  const projectsList = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "A personal portfolio built with React and Tailwind CSS.",
        details: "This project showcases a developer's skills, projects, and contact information with a sleek and modern UI design. It includes sections for about, skills, portfolio, and contact, providing a professional online presence.",
        icon: <FaGlobe className="text-blue-500 text-4xl" />, 
        src:"../public/portfolio.png",
        tools:[<SiReact color="#61DAFB" />,<SiTailwindcss color="#38B2AC" />],
        link: "#",
        github:"https://github.com/faresadda/portfolio/tree/master"
    },
    {
        id: 2,
        name: "E-Commerce App",
        description: "A fully functional e-commerce application with a modern UI.",
        details: "This application provides a seamless online shopping experience, featuring product listings, a shopping cart, checkout functionality, and payment gateway integration. Built with React, it offers a fast and user-friendly experience.",
        icon: <FaShoppingCart className="text-green-500 text-4xl" />, 
        src:"../public/ushop.PNG",
        tools:[<SiReact color="#61DAFB" />,<SiTailwindcss color="#38B2AC" />],
        link: "https://ushopstore.netlify.app/",
        github:"https://github.com/faresadda/ushop/tree/master"
    },
    {
        id: 3,
        name: "Chat AI",
        description: "A chat bot built with API",
        details: "This chatbot is built with AI capabilities to assist users in real-time conversations. It includes NLP processing, user-friendly chat interfaces, and API integration for enhanced responsiveness and contextual awareness.",
        icon: <FaComments className="text-purple-500 text-4xl" />, 
        src:"../public/chatfai.PNG",
        tools:[<SiReact color="#61DAFB" />,<SiTailwindcss color="#38B2AC" />,<SiNodedotjs color="#339933" />,<SiMongodb color="#47A248" />],
        link: "https://chatfai.onrender.com/",
        github:"https://github.com/faresadda/chatfai/tree/master"
    },
  ];

  const skillsList = [
  { id: 1, name: "HTML", icon: <SiHtml5 color="#E34F26" />, proficiency: 90, 
    description: "Markup language for structuring web content.", 
    detail: "HTML (HyperText Markup Language) is the backbone of web pages, used to structure elements like text, images, and links." },
  
  { id: 2, name: "CSS", icon: <SiCss3 color="#1572B6" />, proficiency: 90, 
    description: "Stylesheet language for designing and styling web pages.", 
    detail: "CSS (Cascading Style Sheets) is used to control layout, colors, fonts, and responsiveness of web pages." },

  { id: 3, name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, proficiency: 80, 
    description: "Dynamic programming language for interactive web development.", 
    detail: "JavaScript enables interactive elements, such as animations, event handling, and API integrations on websites." },

  { id: 4, name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />, proficiency: 90, 
    description: "Utility-first CSS framework for rapid UI development.", 
    detail: "Tailwind CSS allows developers to style elements quickly using utility classes, making UI design faster and more flexible." },

  { id: 5, name: "React JS", icon: <SiReact color="#61DAFB" />, proficiency: 80, 
    description: "JavaScript library for building user interfaces with reusable components.", 
    detail: "React is a powerful library for creating interactive and modular UI components, using a virtual DOM for efficient updates." },

  { id: 6, name: "Node JS", icon: <SiNodedotjs color="#339933" />, proficiency: 70, 
      description: "JavaScript runtime for building fast and scalable server-side applications.", 
      detail: "Node.js uses an event-driven, non-blocking I/O model, making it efficient for building APIs and real-time applications." },
  
  { id: 7, name: "Express JS", icon: <SiExpress color="#000000" />, proficiency: 80, 
      description: "Minimal and flexible Node.js web application framework.", 
      detail: "Express simplifies backend development by providing a robust set of features for web and mobile applications." },
  
  { id: 8, name: "MongoDB", icon: <SiMongodb color="#47A248" />, proficiency: 90, 
      description: "NoSQL database for storing flexible, JSON-like documents.", 
      detail: "MongoDB is a document-oriented database designed for scalability and ease of development, ideal for modern applications." },

  { id: 9, name: "Git", icon: <SiGit color="#F05032" />, proficiency: 60, 
    description: "Version control system for tracking code changes.", 
    detail: "Git is essential for managing code versions, allowing developers to collaborate efficiently and track project history." },

  { id: 10, name: "GitHub", icon: <SiGithub color="#181717" />, proficiency: 80, 
    description: "Platform for hosting and collaborating on Git repositories.", 
    detail: "GitHub provides cloud-based Git repository hosting, with features like issue tracking, pull requests, and CI/CD integration." },

  { id: 11, name: "C", icon: <SiC color="#A8B9CC" />, proficiency: 60, 
    description: "Low-level language used for system and application development.", 
    detail: "C is a foundational programming language used in system programming, embedded systems, and performance-critical applications." },

  { id: 12, name: "Python", icon: <SiPython color="#3776AB" />, proficiency: 60, 
      description: "Versatile programming language used in AI, web, and data science.", 
      detail: "Python is widely used for AI, machine learning, automation, and backend web development due to its simplicity and flexibility." },

  { id: 13, name: "SQL", icon: <FaDatabase color="#003B57" />, proficiency: 60, 
    description: "Language for managing and querying relational databases.", 
    detail: "SQL is used to interact with relational databases, enabling data retrieval, manipulation, and management." },

  { id: 14, name: "CapCut", icon: <FaVideo color="#4A90E2" />, proficiency: 75, 
      description: "Video editing software for creating professional-grade content.", 
      detail: "CapCut is a powerful mobile video editing tool that allows users to create high-quality videos with ease. It offers a wide range of features such as transitions, effects, text overlays, and music integration, making it ideal for both beginner and advanced video editors." }

  ];

  const servicesList= [
      { 
          id: 1, 
          title: "UI Development", 
          description: "Creating modern and responsive user interfaces.", 
          details: "We specialize in crafting visually appealing and highly intuitive user interfaces using modern front-end technologies such as React, Vue, and Angular. Our UI development process includes wireframing, prototyping, and implementing interactive components to ensure an optimal user experience. We follow best practices in UI/UX design, ensuring accessibility, responsiveness, and performance-driven designs that captivate users and drive engagement.", 
          icon: <FaPaintBrush className="text-blue-500 text-4xl" /> 
      },
      { 
          id: 2, 
          title: "Responsive Web Design", 
          description: "Ensuring compatibility across all devices.", 
          details: "Our responsive web design service ensures that your website looks and functions flawlessly across all screen sizes, including desktops, tablets, and mobile phones. We utilize CSS Grid, Flexbox, and media queries to create fluid layouts that adapt seamlessly to different resolutions. Additionally, we focus on optimizing touch gestures, navigation structures, and accessibility features to enhance the user experience for all visitors.", 
          icon: <FaMobileAlt className="text-black text-4xl" /> 
      },
      { 
          id: 3, 
          title: "Web Application Development", 
          description: "Building interactive web applications.", 
          details: "We develop high-performance web applications tailored to meet business needs. Our development stack includes cutting-edge frameworks such as React, Angular, and Vue.js. We focus on building scalable, maintainable, and efficient applications with seamless API integration, dynamic UI updates, and real-time data handling. Security, performance, and cross-browser compatibility are at the core of our development approach.", 
          icon: <FaCode className="text-purple-500 text-4xl" /> 
      },
      { 
          id: 4, 
          title: "Performance Optimization", 
          description: "Enhancing website speed and efficiency.", 
          details: "We optimize websites for maximum speed and performance by implementing best practices such as image compression, lazy loading, minification of CSS and JavaScript files, and efficient caching strategies. Our optimization techniques help reduce load times, improve Core Web Vitals, and ensure a smooth browsing experience. Additionally, we analyze bottlenecks using performance monitoring tools to enhance responsiveness and scalability.", 
          icon: <FaBolt className="text-yellow-500 text-4xl" /> 
      },
      { 
          id: 5, 
          title: "API Integration", 
          description: "Connecting front-end with back-end services.", 
          details: "We provide seamless API integration services to connect front-end applications with powerful back-end services. Our experience includes working with RESTful APIs, GraphQL, and WebSockets to enable real-time communication and data synchronization. Whether integrating third-party APIs such as payment gateways, social authentication, or custom-built APIs, we ensure efficient data handling and security best practices.", 
          icon: <FaServer className="text-red-500 text-4xl" /> 
      },
      { 
          id: 6, 
          title: "Testing & Debugging", 
          description: "Ensuring high-quality and bug-free code.", 
          details: "Our testing and debugging services guarantee that your web applications run smoothly and remain bug-free. We use automated testing tools such as Jest, Cypress, and Selenium for unit, integration, and end-to-end testing. Additionally, we conduct manual testing to identify usability issues and ensure cross-browser compatibility. Our debugging process involves analyzing performance issues, fixing logical errors, and improving code efficiency to maintain stability and reliability.", 
          icon: <FaBug className="text-gray-500 text-4xl" /> 
      },
      {
        id: 7,
        title: "Back End Development",
        description: "Powering applications with robust server-side logic.",
        details: "Our back-end development services focus on creating scalable and secure server-side applications using Node.js, Express, and MongoDB. We design efficient database schemas, develop RESTful APIs, implement authentication and authorization, and ensure data integrity and protection. With a focus on clean architecture and performance, our solutions support seamless front-end integration and business logic execution.",
        icon: <FaDatabase className="text-indigo-500 text-4xl" />
      },
      {
        id: 8,
        title: "Video Editing & Montage",
        description: "Crafting professional and engaging video content.",
        details: "We offer high-quality video editing and montage services for social media, marketing, and presentations. Our editing process includes cutting, transitions, color correction, subtitles, sound design, and motion graphics to deliver polished and impactful videos. We work with tools like Adobe Premiere Pro and After Effects to ensure cinematic quality tailored to your brand and vision.",
        icon: <FaVideo className="text-gray-600 text-4xl" />
      }
  ];
  
  const contact=useRef(null)
  const [index,setIndex]=useState(0)
  const [work,setWork]=useState(false)
  const [pageexist,setPageexist]=useState(null)
  const [indexskill,setIndexskill]=useState(null)
  const [indexservice,setIndexservice]=useState(null)

  const home=useRef(null)
  const about=useRef(null)
  const skills=useRef(null)
  const services=useRef(null)
  const projects=useRef(null)
  const [list,dispatch]=useReducer(reducer,{name:'home'})
    function reducer(list,action){
        switch(action.type){

            case 'home' : {return {name:'home'}}
            case 'about' : {return {name:'about'}}
            case 'skills' : {return {name:'skills'}}
            case 'services' : {return {name:'services'}}
            case 'projects' : {return {name:'projects'}}
            case 'contact' : {return {name:'contact'}}
        }
    }
    const [arrow, setArrow] = useState(window.scrollY>500);
    window.onscroll=()=>{
      setArrow(window.scrollY>500)
    }
    
    
  return (
    <Context.Provider value={{projectsList,skillsList,servicesList}}>
      <Blurcontext.Provider value={{work,setWork,pageexist,setPageexist}}>
      <BrowserRouter>
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar contact={contact} projects={projects} dispatch={dispatch} list={list}/>
                <Outlet />
                <Footer home={home} about={about} skills={skills} services={services} projects={projects} contact={contact}/>
                {arrow && <img src={up} className={`fixed bottom-5 right-5 p-2 rounded-full box-content bg-white text-2xl w-[2rem] z-40 
                  ${(work||pageexist) && 'blur-xs'}`} onClick={()=>{scrollTo({top:0,behavior:'smooth'})}} loading="lazy"/>}

                {work && <Work setWrok={setWork}/>}
                {pageexist!==null && <Page indexservice={indexservice} indexskill={indexskill}/>}
                
              </>
            }
          >
            <Route index element={<Content setIndex={setIndex} setIndexservice={setIndexservice} setIndexskill={setIndexskill} 
            home={home} about={about} skills={skills} services={services} projects={projects} dispatch={dispatch}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/projects" element={<Projects index={index}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </Blurcontext.Provider>
    </Context.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
