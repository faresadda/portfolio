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
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaBolt, FaBug, FaShoppingCart, FaComments, FaGlobe } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiGit, SiGithub, SiC, SiSqlite, SiPython } from "react-icons/si";
import portfolio from "../public/portfolio.png"
import ushop from "../public/ushop.png"
import chatfai from "../public/chatfai.png"
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
        src:portfolio,
        tools:['React','Tailwind','Three'],
        link: "#",
        github:"https://github.com/faresadda/portfolio/tree/master"
    },
    {
        id: 2,
        name: "E-Commerce App",
        description: "A fully functional e-commerce application with a modern UI.",
        details: "This application provides a seamless online shopping experience, featuring product listings, a shopping cart, checkout functionality, and payment gateway integration. Built with React, it offers a fast and user-friendly experience.",
        icon: <FaShoppingCart className="text-green-500 text-4xl" />, 
        src:ushop,
        tools:['React','Tailwind'],
        link: "https://ushopstore.netlify.app/",
        github:"https://github.com/faresadda/ushop/tree/master"
    },
    {
        id: 3,
        name: "Chat AI",
        description: "A chat bot built with API",
        details: "This chatbot is built with AI capabilities to assist users in real-time conversations. It includes NLP processing, user-friendly chat interfaces, and API integration for enhanced responsiveness and contextual awareness.",
        icon: <FaComments className="text-purple-500 text-4xl" />, 
        src:chatfai,
        tools:['React','Tailwind','API'],
        link: "https://chatfai.netlify.app/",
        github:"https://github.com/faresadda/chatfai/tree/master"
    },
  ];

  const skillsList = [
  { id: 1, name: "HTML", icon: <SiHtml5 color="#E34F26" />, proficiency: 95, 
    description: "Markup language for structuring web content.", 
    detail: "HTML (HyperText Markup Language) is the backbone of web pages, used to structure elements like text, images, and links." },
  
  { id: 2, name: "CSS", icon: <SiCss3 color="#1572B6" />, proficiency: 90, 
    description: "Stylesheet language for designing and styling web pages.", 
    detail: "CSS (Cascading Style Sheets) is used to control layout, colors, fonts, and responsiveness of web pages." },

  { id: 3, name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, proficiency: 85, 
    description: "Dynamic programming language for interactive web development.", 
    detail: "JavaScript enables interactive elements, such as animations, event handling, and API integrations on websites." },

  { id: 4, name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />, proficiency: 80, 
    description: "Utility-first CSS framework for rapid UI development.", 
    detail: "Tailwind CSS allows developers to style elements quickly using utility classes, making UI design faster and more flexible." },

  { id: 5, name: "React.js", icon: <SiReact color="#61DAFB" />, proficiency: 85, 
    description: "JavaScript library for building user interfaces with reusable components.", 
    detail: "React is a powerful library for creating interactive and modular UI components, using a virtual DOM for efficient updates." },

  { id: 6, name: "Git", icon: <SiGit color="#F05032" />, proficiency: 75, 
    description: "Version control system for tracking code changes.", 
    detail: "Git is essential for managing code versions, allowing developers to collaborate efficiently and track project history." },

  { id: 7, name: "GitHub", icon: <SiGithub color="#181717" />, proficiency: 80, 
    description: "Platform for hosting and collaborating on Git repositories.", 
    detail: "GitHub provides cloud-based Git repository hosting, with features like issue tracking, pull requests, and CI/CD integration." },

  { id: 8, name: "C", icon: <SiC color="#A8B9CC" />, proficiency: 70, 
    description: "Low-level language used for system and application development.", 
    detail: "C is a foundational programming language used in system programming, embedded systems, and performance-critical applications." },

  { id: 9, name: "SQL", icon: <SiSqlite color="#003B57" />, proficiency: 75, 
    description: "Language for managing and querying relational databases.", 
    detail: "SQL is used to interact with relational databases, enabling data retrieval, manipulation, and management." },

  { id: 10, name: "Python", icon: <SiPython color="#3776AB" />, proficiency: 80, 
    description: "Versatile programming language used in AI, web, and data science.", 
    detail: "Python is widely used for AI, machine learning, automation, and backend web development due to its simplicity and flexibility." }
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
          icon: <FaMobileAlt className="text-green-500 text-4xl" /> 
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
  ];
  
  const contact=useRef(null)
  const [index,setIndex]=useState(0)
  const [work,setWork]=useState(false)
  const [page,setPage]=useState(null)
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
  return (
    <Context.Provider value={{projectsList,skillsList,servicesList}}>
      <Blurcontext.Provider value={{work,setWork,page,setPage}}>
      <BrowserRouter>
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar contact={contact} projects={projects} dispatch={dispatch} list={list}/>
                <Outlet />
                <Footer home={home} about={about} skills={skills} services={services} projects={projects} contact={contact}/>
                <img src={up} className={`fixed bottom-5 right-5 p-2 rounded-full box-content bg-white text-2xl w-[2rem] z-50 
                  ${work && 'blur-xs'}`} onClick={()=>{scrollTo({top:0,behavior:'smooth'})}} loading="lazy"/>
                {work && <Work setWrok={setWork}/>}
                {page!==null && <Page indexservice={indexservice} indexskill={indexskill}/>}
                
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
