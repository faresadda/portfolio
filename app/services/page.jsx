"use client";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaBolt,
  FaBug,
  FaShoppingCart,
  FaComments,
  FaGlobe,
  FaDatabase,
  FaVideo,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useDataContext } from "../context/dataContext";

export default function Services() {
  const { work } = useDataContext();
  const services = [
    {
      id: 1,
      title: "UI Development",
      description: "Creating modern and responsive user interfaces.",
      details:
        "We specialize in crafting visually appealing and highly intuitive user interfaces using modern front-end technologies such as React, Vue, and Angular. Our UI development process includes wireframing, prototyping, and implementing interactive components to ensure an optimal user experience. We follow best practices in UI/UX design, ensuring accessibility, responsiveness, and performance-driven designs that captivate users and drive engagement.",
      icon: <FaPaintBrush className="text-blue-500 text-4xl" />,
    },
    {
      id: 2,
      title: "Responsive Web Design",
      description: "Ensuring compatibility across all devices.",
      details:
        "Our responsive web design service ensures that your website looks and functions flawlessly across all screen sizes, including desktops, tablets, and mobile phones. We utilize CSS Grid, Flexbox, and media queries to create fluid layouts that adapt seamlessly to different resolutions. Additionally, we focus on optimizing touch gestures, navigation structures, and accessibility features to enhance the user experience for all visitors.",
      icon: <FaMobileAlt className="text-white text-4xl" />,
    },
    {
      id: 3,
      title: "Web Application Development",
      description: "Building interactive web applications.",
      details:
        "We develop high-performance web applications tailored to meet business needs. Our development stack includes cutting-edge frameworks such as React, Angular, and Vue.js. We focus on building scalable, maintainable, and efficient applications with seamless API integration, dynamic UI updates, and real-time data handling. Security, performance, and cross-browser compatibility are at the core of our development approach.",
      icon: <FaCode className="text-purple-500 text-4xl" />,
    },
    {
      id: 4,
      title: "Performance Optimization",
      description: "Enhancing website speed and efficiency.",
      details:
        "We optimize websites for maximum speed and performance by implementing best practices such as image compression, lazy loading, minification of CSS and JavaScript files, and efficient caching strategies. Our optimization techniques help reduce load times, improve Core Web Vitals, and ensure a smooth browsing experience. Additionally, we analyze bottlenecks using performance monitoring tools to enhance responsiveness and scalability.",
      icon: <FaBolt className="text-yellow-500 text-4xl" />,
    },
    {
      id: 5,
      title: "API Integration",
      description: "Connecting front-end with back-end services.",
      details:
        "We provide seamless API integration services to connect front-end applications with powerful back-end services. Our experience includes working with RESTful APIs, GraphQL, and WebSockets to enable real-time communication and data synchronization. Whether integrating third-party APIs such as payment gateways, social authentication, or custom-built APIs, we ensure efficient data handling and security best practices.",
      icon: <FaServer className="text-red-500 text-4xl" />,
    },
    {
      id: 6,
      title: "Testing & Debugging",
      description: "Ensuring high-quality and bug-free code.",
      details:
        "Our testing and debugging services guarantee that your web applications run smoothly and remain bug-free. We use automated testing tools such as Jest, Cypress, and Selenium for unit, integration, and end-to-end testing. Additionally, we conduct manual testing to identify usability issues and ensure cross-browser compatibility. Our debugging process involves analyzing performance issues, fixing logical errors, and improving code efficiency to maintain stability and reliability.",
      icon: <FaBug className="text-gray-500 text-4xl" />,
    },
    {
      id: 7,
      title: "Back End Development",
      description: "Powering applications with robust server-side logic.",
      details:
        "Our back-end development services focus on creating scalable and secure server-side applications using Node.js, Express, and MongoDB. We design efficient database schemas, develop RESTful APIs, implement authentication and authorization, and ensure data integrity and protection. With a focus on clean architecture and performance, our solutions support seamless front-end integration and business logic execution.",
      icon: <FaDatabase className="text-indigo-500 text-4xl" />,
    },
    {
      id: 8,
      title: "Video Editing & Montage",
      description: "Crafting professional and engaging video content.",
      details:
        "We offer high-quality video editing and montage services for social media, marketing, and presentations. Our editing process includes cutting, transitions, color correction, subtitles, sound design, and motion graphics to deliver polished and impactful videos. We work with tools like Adobe Premiere Pro and After Effects to ensure cinematic quality tailored to your brand and vision.",
      icon: <FaVideo className="text-[#A8B9CC] text-4xl" />,
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
    <div
      className={`${
        work ? "blur-xs" : "blur-none"
      } min-h-screen w-full bg-black mt-10`}
    >
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              MY SERVICES
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are the main services I offer to help you build, optimize,
              and grow your digital presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`bg-white/5 backdrop-blur-3xl rounded-2xl p-6 shadow-[8px_8px_0px_#fff]/20 border border-gray-800 hover:border-yellow-500/10 transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(idx + 2) * 200}ms` }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  {service.icon}
                  <h2 className="text-2xl text-center w-fit inline-block font-bold text-gray-200">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-300 mb-3 min-h-[48px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
