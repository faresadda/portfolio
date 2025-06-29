"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { useDataContext } from "../context/dataContext";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    information: false,
    education: false,
    timeline: false,
    mainText: false,
    buttons: false,
  });
  const [visibleItems, setVisibleItems] = useState({
    informationItems: [],
    educationItems: [],
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Start revealing sections
          setTimeout(() => {
            setVisibleSections((prev) => ({ ...prev, information: true }));
            setVisibleSections((prev) => ({ ...prev, education: true }));
          }, 200);

          // Reveal information items
          setTimeout(() => {
            setVisibleItems((prev) => ({
              ...prev,
              informationItems: ["name"],
            }));
          }, 400);

          setTimeout(() => {
            setVisibleItems((prev) => ({
              ...prev,
              informationItems: ["name", "age"],
            }));
          }, 500);

          setTimeout(() => {
            setVisibleItems((prev) => ({
              ...prev,
              informationItems: ["name", "age", "location"],
            }));
          }, 600);

          setTimeout(() => {
            setVisibleItems((prev) => ({
              ...prev,
              informationItems: ["name", "age", "location", "experience"],
            }));
          }, 700);

          // Reveal education items
          setTimeout(() => {
            setVisibleItems((prev) => ({
              ...prev,
              educationItems: ["degree"],
            }));
          }, 800);

          setTimeout(() => {
            setVisibleItems((prev) => ({
              ...prev,
              educationItems: ["degree", "university"],
            }));
          }, 900);

          setTimeout(() => {
            setVisibleItems((prev) => ({
              ...prev,
              educationItems: ["degree", "university", "duration"],
            }));
          }, 1000);

          setTimeout(() => {
            setVisibleItems((prev) => ({
              ...prev,
              educationItems: ["degree", "university", "duration", "field"],
            }));
          }, 1100);

          // Reveal timeline
          setTimeout(() => {
            setVisibleSections((prev) => ({ ...prev, timeline: true }));
          }, 1200);

          // Reveal main text
          setTimeout(() => {
            setVisibleSections((prev) => ({ ...prev, mainText: true }));
          }, 1400);

          // Reveal buttons
          setTimeout(() => {
            setVisibleSections((prev) => ({ ...prev, buttons: true }));
          }, 1600);

          // Once we've seen it, we don't need to observe anymore
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const achievements = [
    {
      year: "2020",
      title: "Started University",
      desc: "Began studies in Automation and Control Engineering.",
    },
    {
      year: "2021",
      title: "Programming Start",
      desc: "Started learning C language and Python programming.",
    },
    {
      year: "2022",
      title: "College Projects",
      desc: "Developed academic projects and automation systems.",
    },
    {
      year: "2023-2024",
      title: "Advanced Projects & Freelance",
      desc: "Completed advanced projects and started freelance work.",
    },
    {
      year: "2025",
      title: "Project Completion",
      desc: "Completed major projects and launched portfolio.",
    },
  ];

  const achievementColors = [
    {
      bg: "bg-gradient-to-br from-blue-400/10 via-blue-500/5 to-purple-500/10",
      border: "border border-blue-300/20 hover:border-blue-300/40",
      yearColor: "text-blue-200",
      titleColor: "text-white",
      descColor: "text-gray-300",
    },
    {
      bg: "bg-gradient-to-br from-emerald-400/10 via-emerald-500/5 to-teal-500/10",
      border: "border border-emerald-300/20 hover:border-emerald-300/40",
      yearColor: "text-emerald-200",
      titleColor: "text-white",
      descColor: "text-gray-300",
    },
    {
      bg: "bg-gradient-to-br from-orange-400/10 via-orange-500/5 to-red-500/10",
      border: "border border-orange-300/20 hover:border-orange-300/40",
      yearColor: "text-orange-200",
      titleColor: "text-white",
      descColor: "text-gray-300",
    },
    {
      bg: "bg-gradient-to-br from-purple-400/10 via-purple-500/5 to-pink-500/10",
      border: "border border-purple-300/20 hover:border-purple-300/40",
      yearColor: "text-purple-200",
      titleColor: "text-white",
      descColor: "text-gray-300",
    },
    {
      bg: "bg-gradient-to-br from-yellow-400/10 via-yellow-500/5 to-orange-500/10",
      border: "border border-yellow-300/20 hover:border-yellow-300/40",
      yearColor: "text-yellow-200",
      titleColor: "text-white",
      descColor: "text-gray-300",
    },
  ];

  const dotColors = [
    "bg-gradient-to-tr from-blue-300/80 to-purple-400/80",
    "bg-gradient-to-tr from-emerald-300/80 to-teal-400/80",
    "bg-gradient-to-tr from-orange-300/80 to-red-400/80",
    "bg-gradient-to-tr from-purple-300/80 to-pink-400/80",
    "bg-gradient-to-tr from-yellow-300/80 to-orange-400/80",
  ];

  const { work } = useDataContext();

  return (
    <section
      ref={sectionRef}
      className={`${
        work ? "blur-xs" : "blur-none"
      } about relative min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-10`}
    >
      <div
        className={`flex flex-col items-center mb-20 z-10 transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="flex items-center gap-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text drop-shadow-lg mb-2">
          ABOUT ME
        </h2>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-5">
        {/* Information */}
        <div
          className={`flex-1 w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 mb-8 flex flex-col items-center z-10 transition-all duration-700 transform ${
            visibleSections.information
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          } border border-white/10`}
        >
          <h3 className="mb-4 text-lg md:text-xl lg:text-2xl font-bold text-yellow-300 drop-shadow flex items-center gap-3">
            <PiUserListFill className="text-xl md:text-2xl lg:text-3xl" />{" "}
            Personal Information
          </h3>

          <div className="w-full space-y-3">
            <div
              className={`flex flex-col sm:flex-row sm:items-start sm:justify-between bg-white/5 rounded-lg p-3 border border-white/10 transition-all duration-500 transform ${
                visibleItems.informationItems.includes("name")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <span className="text-gray-300 font-medium text-xs md:text-sm lg:text-base flex-shrink-0 mb-2 sm:mb-0">
                Name:
              </span>
              <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-right sm:text-left break-words">
                Fares Adda
              </span>
            </div>

            <div
              className={`flex flex-col sm:flex-row sm:items-start sm:justify-between bg-white/5 rounded-lg p-3 border border-white/10 transition-all duration-500 transform ${
                visibleItems.informationItems.includes("age")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <span className="text-gray-300 font-medium text-xs md:text-sm lg:text-base flex-shrink-0 mb-2 sm:mb-0">
                Age:
              </span>
              <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-right sm:text-left break-words">
                {new Date().getFullYear() - 2001} years
              </span>
            </div>

            <div
              className={`flex flex-col sm:flex-row sm:items-start sm:justify-between bg-white/5 rounded-lg p-3 border border-white/10 transition-all duration-500 transform ${
                visibleItems.informationItems.includes("location")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <span className="text-gray-300 font-medium text-xs md:text-sm lg:text-base flex-shrink-0 mb-2 sm:mb-0">
                Location:
              </span>
              <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-right sm:text-left break-words">
                Boumerdes, Algeria
              </span>
            </div>

            <div
              className={`flex flex-col sm:flex-row sm:items-start sm:justify-between bg-white/5 rounded-lg p-3 border border-white/10 transition-all duration-500 transform ${
                visibleItems.informationItems.includes("experience")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <span className="text-gray-300 font-medium text-xs md:text-sm lg:text-base flex-shrink-0 mb-2 sm:mb-0">
                Experience:
              </span>
              <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-right sm:text-left break-words">
                {new Date().getFullYear() - 2021}+ Years
              </span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div
          className={`flex-1 w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 mb-8 flex flex-col items-center z-10 transition-all duration-700 transform ${
            visibleSections.education
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          } border border-white/10`}
        >
          <h3 className="mb-4 text-lg md:text-xl lg:text-2xl font-bold text-yellow-300 drop-shadow flex items-center gap-3">
            <FaGraduationCap className="text-xl md:text-2xl lg:text-3xl" />{" "}
            Education
          </h3>

          <div className="w-full space-y-3">
            <div
              className={`flex flex-col sm:flex-row sm:items-start gap-5 sm:justify-between bg-white/5 rounded-lg p-3 border border-white/10 transition-all duration-500 transform ${
                visibleItems.educationItems.includes("degree")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <span className="text-gray-300 font-medium text-xs md:text-sm lg:text-base flex-shrink-0 mb-2 sm:mb-0">
                Degree:
              </span>
              <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-right sm:text-left break-words">
                Bachelor's in Automation and Control Engineering
              </span>
            </div>

            <div
              className={`flex flex-col sm:flex-row sm:items-start sm:justify-between bg-white/5 rounded-lg p-3 border border-white/10 transition-all duration-500 transform ${
                visibleItems.educationItems.includes("university")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <span className="text-gray-300 font-medium text-xs md:text-sm lg:text-base flex-shrink-0 mb-2 sm:mb-0">
                University:
              </span>
              <span className="text-white font-semibold text-xs md:text-sm lg:text-base text-right sm:text-left break-words">
                ESSA - ENSTA University
              </span>
            </div>

            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white/5 rounded-lg p-3 border border-white/10 transition-all duration-500 transform ${
                visibleItems.educationItems.includes("duration")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <span className="text-gray-300 font-medium text-xs md:text-sm lg:text-base">
                Duration:
              </span>
              <span className="text-white font-semibold text-xs md:text-sm lg:text-base">
                2020 - 2025
              </span>
            </div>

            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white/5 rounded-lg p-3 border border-white/10 transition-all duration-500 transform ${
                visibleItems.educationItems.includes("field")
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <span className="text-gray-300 font-medium text-xs md:text-sm lg:text-base">
                Field:
              </span>
              <span className="text-white font-semibold text-xs md:text-sm lg:text-base">
                Engineering & Technology
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Timeline */}
      <div
        className={`my-10 w-full mb-12 z-10 transition-all duration-700 transform ${
          visibleSections.timeline
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-auto">
          {achievements.map((item, i) => (
            <div key={i} className="flex items-center space-x-4 w-full">
              {/* Dot on the side */}
              <div
                className={`w-4 md:w-5 h-4 md:h-5 rounded-full ${dotColors[i]} border-2 md:border-3 border-white shadow-lg flex-shrink-0`}
              />
              {/* Card */}
              <div
                className={`${achievementColors[i].bg} backdrop-blur-xl rounded-xl shadow-lg p-4 md:p-6 flex-1 min-w-0 ${achievementColors[i].border} transition-all duration-300 hover:shadow-xl`}
              >
                <div
                  className={`${achievementColors[i].yearColor} font-bold text-lg md:text-xl mb-2`}
                >
                  {item.year}
                </div>
                <div
                  className={`${achievementColors[i].titleColor} font-semibold mb-2 text-base md:text-lg`}
                >
                  {item.title}
                </div>
                <div
                  className={`${achievementColors[i].descColor} text-sm md:text-base`}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Text */}
      <div
        className={`w-full text-center z-10 transition-all duration-700 transform ${
          visibleSections.mainText
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <p className="text-base md:text-lg lg:text-xl text-white mb-4 md:mb-6 font-medium px-4">
          I'm a dedicated Full-Stack Developer with expertise in React JS,
          Tailwind CSS, and JavaScript on the front end, and Node.js,
          Express.js, and MongoDB on the back end. I specialize in building
          responsive, high-performance web applications that deliver seamless
          user experiences.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-white mb-4 md:mb-6 px-4">
          With a background in Automation and Control Systems, I bring strong
          analytical and problem-solving skills to my development process. This
          technical foundation enables me to integrate smart automation,
          optimize functionality, and develop efficient solutions across the
          full stack.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed mb-6 md:mb-8 px-4">
          I strive to write clean, maintainable, and scalable code, ensuring
          both the frontend and backend are well-structured and easy to expand.
          From dynamic user interfaces to robust APIs and secure database
          architectures, my goal is to deliver applications that are fast,
          functional, user-friendly, and aligned with modern web standards.
        </p>
      </div>

      <div
        className={`flex flex-col gap-4 md:gap-8 sm:flex-row transition-all duration-700 transform ${
          visibleSections.buttons
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <a
          href="mailto:faresadda2001@gmail.com"
          className="flex gap-2 items-center justify-center text-black bg-yellow-300 backdrop-blur-3xl border-2 border-white
            rounded-lg px-6 md:px-10 py-2 md:py-3 font-bold shadow-[5px_5px_0px_#fff] transition-all duration-300 hover:bg-white/10 hover:text-white
            active:bg-black active:text-white active:shadow-none active:translate-y-1 w-full sm:w-fit text-sm md:text-base"
        >
          <FaEnvelope className="animate-bounce" /> Contact Me
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center justify-center text-white bg-white/10 backdrop-blur-3xl border-2 border-white
            rounded-lg px-6 md:px-10 py-2 md:py-3 font-bold shadow-[5px_5px_0px_#fff] transition-all duration-300 hover:bg-yellow-300 hover:text-black
            active:bg-black active:text-white active:shadow-none active:translate-y-1 w-full sm:w-fit text-sm md:text-base"
        >
          View CV <BsFileEarmarkPdfFill className="text-lg md:text-xl" />
        </a>
      </div>
    </section>
  );
}
