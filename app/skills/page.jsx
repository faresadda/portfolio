"use client"
import { useEffect, useState, useRef } from "react";
import { useDataContext } from "../context/dataContext";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiC,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaLaptopCode,
  FaServer,
  FaVideo,
  FaLightbulb,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

export default function Skills() {
  const { dispatch,work } = useDataContext();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          dispatch({ type: "skills" });
          // Once we've seen it, we don't need to observe anymore
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when even 10% of the element is visible
        rootMargin: "0px", // Start animation as soon as the element comes into view
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
  }, [dispatch]);

  const skills = [
    {
      id: 1,
      name: "HTML",
      icon: <SiHtml5 className="text-[#E34F26]" />,
      description: "Markup language for structuring web content.",
      bg: "bg-[#E34F26]/10",
    },
    {
      id: 2,
      name: "CSS",
      icon: <SiCss3 className="text-[#1572B6]" />,
      description: "Stylesheet language for designing and styling web pages.",
      bg: "bg-[#1572B6]/10",
    },
    {
      id: 3,
      name: "Java Script",
      icon: <SiJavascript className="text-[#F7DF1E]" />,
      description:
        "Dynamic programming language for interactive web development.",
      bg: "bg-[#F7DF1E]/10",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#38B2AC]" />,
      description: "Utility-first CSS framework for rapid UI development.",
      bg: "bg-[#38B2AC]/10",
    },
    {
      id: 5,
      name: "React JS",
      icon: <SiReact className="text-[#61DAFB]" />,
      description:
        "JavaScript library for building user interfaces with reusable components.",
      bg: "bg-[#61DAFB]/10",
    },
    {
      id: 6,
      name: "Next JS",
      icon: <SiNextdotjs className="text-white" />,
      description: "React framework for production-grade applications.",
      bg: "bg-white/10",
    },
    {
      id: 7,
      name: "Node JS",
      icon: <SiNodedotjs className="text-[#339933]" />,
      description:
        "JavaScript runtime for building fast and scalable server-side applications.",
      bg: "bg-[#339933]/10",
    },
    {
      id: 8,
      name: "Express JS",
      icon: <SiExpress className="text-black dark:text-white" />,
      description: "Minimal and flexible Node.js web application framework.",
      bg: "bg-white/10",
    },
    {
      id: 9,
      name: "Mongo DB",
      icon: <SiMongodb className="text-[#47A248]" />,
      description: "NoSQL database for storing flexible, JSON-like documents.",
      bg: "bg-[#47A248]/10",
    },
    {
      id: 10,
      name: "Git",
      icon: <SiGit className="text-[#F05032]" />,
      description: "Version control system for tracking code changes.",
      bg: "bg-[#F05032]/10",
    },
    {
      id: 11,
      name: "GitHub",
      icon: <SiGithub className="text-[#181717] dark:text-white" />,
      description:
        "Platform for hosting and collaborating on Git repositories.",
      bg: "bg-white/10",
    },
    {
      id: 12,
      name: "C",
      icon: <SiC className="text-[#A8B9CC]" />,
      description:
        "Low-level language used for system and application development.",
      bg: "bg-[#A8B9CC]/10",
    },
    {
      id: 13,
      name: "Python",
      icon: <SiPython className="text-[#3776AB]" />,
      description:
        "Versatile programming language used in AI, web, and data science.",
      bg: "bg-[#3776AB]/10",
    },
    {
      id: 14,
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-[#4169E1]" />,
      description: "Powerful open source object-relational database system.",
      bg: "bg-[#4169E1]/10",
    },
    {
      id: 15,
      name: "CapCut",
      icon: <FaVideo className="text-white" />,
      description:
        "Video editing software for creating professional-grade content.",
      bg: "bg-white/10",
    },
  ];

  const skillCategories = [
    {
      title: "Basic",
      icon: <FaCode className="text-4xl" />,
      skills: skills.filter((skill) =>
        ["HTML", "CSS", "Java Script", "C", "Python"].includes(skill.name)
      ),
    },
    {
      title: "Frontend",
      icon: <FaLaptopCode className="text-4xl" />,
      skills: skills.filter((skill) =>
        ["React JS", "Next JS", "Tailwind CSS"].includes(skill.name)
      ),
    },
    {
      title: "Backend",
      icon: <FaServer className="text-4xl" />,
      skills: skills.filter((skill) =>
        ["Node JS", "Express JS"].includes(skill.name)
      ),
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-4xl" />,
      skills: skills.filter((skill) =>
        ["Mongo DB", "PostgreSQL"].includes(skill.name)
      ),
    },
    {
      title: "Tools",
      icon: <FaTools className="text-4xl" />,
      skills: skills.filter((skill) =>
        ["Git", "GitHub", "CapCut"].includes(skill.name)
      ),
    },
  ];

  return (
    <div className={`${work ? 'blur-xs' : 'blur-none'} min-h-screen w-full bg-black mt-10`}>
      <section ref={sectionRef} className="relative py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div
            className={`text-center mb-16 transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1 className="text-6xl font-bold mb-6 text-white">MY SKILLS</h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of technical skills and expertise
              developed through years of hands-on experience in software
              development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-white/5 backdrop-blur-3xl rounded-2xl p-8 shadow-[8px_8px_0px_#fff]/20 hover:border-yellow-500/10 transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } group`}
                style={{
                  transitionDelay: `${(categoryIndex + 2) * 200}ms`,
                }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="group-hover:scale-110 duration-500 transition-all group-hover:!text-yellow-400">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-200 group-hover:text-yellow-400 transition-colors duration-500">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.id}
                      className={`relative group/skill transition-all duration-700 transform ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${
                          (categoryIndex + 2) * 200 + skillIndex * 100
                        }ms`,
                      }}
                    >
                      <div
                        className={`${skill.bg} shadow-[3px_3px_0px_#fff] flex items-center p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-white`}
                      >
                        <div className="text-2xl transform group-hover/skill:scale-110 transition-all duration-300 shrink-0">
                          {skill.icon}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-200 group-hover/skill:text-yellow-400 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

    
        </div>
      </section>
    </div>
  );
}
