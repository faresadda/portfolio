"use client"

import {
  FaGlobe,
  FaShoppingCart,
  FaComments,
  FaCloudSun,
  FaBitcoin,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDataContext } from "../context/dataContext";

export default function Projects() {
  const {work} = useDataContext()
  const projects = [
    {
      id: 1,
      name: "E-Commerce App",
      description:
        "A complete e-commerce application with a modern interface and smooth user experience, supporting product display, shopping cart, and online payment.",
      image: "/ushop.png",
      tools: [
        <div className="flex items-center gap-2">
          <SiReact color="#61DAFB" /> ReactJS
        </div>,
        <div className="flex items-center gap-2">
          <SiTailwindcss color="#38B2AC" /> TailwindCSS
        </div>,
        <div className="flex items-center gap-2">
          <SiNodedotjs color="#339933" /> NodeJS
        </div>,
        <div className="flex items-center gap-2">
          <SiMongodb color="#47A248" /> MongoDB
        </div>,
      ],
      link: "https://ushopstore.netlify.app/",
      github: "https://github.com/faresadda/ushop/tree/master",
    },
    {
      id: 2,
      name: "Chat AI",
      description:
        "An intelligent chatbot powered by AI for natural language processing, providing instant and effective interaction with users.",
      image: "/chatfai.png",
      tools: [
        <div className="flex items-center gap-2">
          <SiReact color="#61DAFB" /> ReactJS
        </div>,
        <div className="flex items-center gap-2">
          <SiTailwindcss color="#38B2AC" /> TailwindCSS
        </div>,
        <div className="flex items-center gap-2">
          <SiNodedotjs color="#339933" /> NodeJS
        </div>,
        <div className="flex items-center gap-2">
          <SiMongodb color="#47A248" /> MongoDB
        </div>,
      ],
      link: "https://chatfai.netlify.app/",
      github: "https://github.com/faresadda/chatfai",
    },
    {
      id: 3,
      name: "Weather App",
      description:
        "An app that displays live weather conditions with accurate forecasts and a simple, user-friendly design.",
      image: "/weather.png",
      tools: [
        <div className="flex items-center gap-2">
          <SiHtml5 color="#E34F26" /> HTML
        </div>,
        <div className="flex items-center gap-2">
          <SiCss3 color="#1572B6" /> CSS
        </div>,
        <div className="flex items-center gap-2">
          <SiJavascript color="#F7DF1E" /> JavaScript
        </div>,
      ],
      link: "https://weatherappmeteo.netlify.app/",
      github: "https://github.com/faresadda/weather",
    },
    {
      id: 4,
      name: "Trading Platform",
      description:
        "A platform for tracking and analyzing cryptocurrency prices with an interactive interface and continuously updated data.",
      image: "/tradingplatform.png",
      tools: [
        <div className="flex items-center gap-2">
          <SiReact color="#61DAFB" /> ReactJS
        </div>,
        <div className="flex items-center gap-2">
          <SiTailwindcss color="#38B2AC" /> TailwindCSS
        </div>,
      ],
      link: "https://www.jjtrading.site/",
      github: "https://github.com/faresadda/tradingplatform",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className={`${work ? 'blur-xs' : 'blur-none'} min-h-screen w-full bg-black mt-10`}>
      <section ref={sectionRef} className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">MY PROJECTS</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I have worked on, showcasing my
              skills in web development and UI/UX design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`bg-white/5 backdrop-blur-3xl rounded-2xl p-6 shadow-[8px_8px_0px_#fff]/20 border border-gray-800 hover:border-yellow-500/10 transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } border border-white/20`}
                style={{ transitionDelay: `${(idx + 2) * 200}ms` }}
              >
                <h2 className="text-2xl font-bold text-gray-200  mb-5">
                    {project.name}
                  </h2>

                <div className="mb-4 rounded-xl overflow-hidden bg-black/30 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1366}
                    height={613}
                    
                  />
                </div>
                <p className="text-gray-300 mb-3 min-h-[48px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="p-2 rounded-lg bg-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && project.link !== "#" && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/80 text-black font-semibold hover:bg-yellow-400 transition"
                    >
                      Live
                      <FaLink />
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-yellow-500 text-yellow-400 font-semibold hover:bg-yellow-500/10 transition"
                  >
                    GitHub
                    <FaGithub />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
