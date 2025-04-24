import { useContext } from "react";
import title from "../../public/title.png";
import mark from "../../public/mark.png";
import { Blurcontext } from "../main";
import { BsFileEarmarkPdf } from "react-icons/bs";
const About = ({ about }) => {
  const { work, setWork, pageexist, setPageexist } = useContext(Blurcontext);
  return (
    <section
      className={`bg-gray-50 p-20 relative min-h-screen flex flex-col justify-center pt-50 max-[850px]:px-8 ${
        (work || pageexist !== null) && "blur-xs"
      }`}
      ref={about}
    >
      <div className="z-10 relative">
        <div className="flex items-center justify-center gap-6 mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
            ABOUT
          </h2>
          <img src={title} className="title" loading="lazy" />
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          As a dedicated Full-Stack Developer, I
          specialize in React JS, Tailwind CSS, JavaScript, and modern web
          technologies—while also working comfortably on the back-end with
          Node JS, Express JS, and MongoDB. I build dynamic, responsive, and
          high-performance web applications that provide seamless user
          experiences from interface to infrastructure.
        </p>
        <div className="text-gray-700 text-lg leading-relaxed mt-6">
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <img src={mark} className="w-7" />
              Front-End Expertise: I craft intuitive, visually appealing user
              interfaces using React JS and Tailwind CSS, focusing on code
              efficiency, responsiveness, and accessibility. My JavaScript
              skills allow me to bring interactivity and fluidity to every user
              experience.
            </li>
            <li className="flex items-start gap-4">
            <img src={mark} className="w-7" />
              Back-End Development: With practical experience in Node JS and
              Express JS, I design and implement scalable RESTful APIs and handle
              data management with MongoDB. My focus is on building robust,
              secure, and maintainable backend systems that power modern web
              applications.
            </li>
            <li className="flex items-start gap-4">
              <img src={mark} className="w-7" />
              Focus on Performance & Optimization: My development approach
              includes code efficiency, lazy loading, and performance
              optimizations to ensure applications are fast and scalable.
            </li>
            <li className="flex items-start gap-4">
              <img src={mark} className="w-7" />
              Clean & Maintainable Code: I adhere to best coding practices,
              utilizing modular architecture, reusable components, and version
              control (Git & GitHub) to maintain structured and efficient
              development workflows.
            </li>
            <li className="flex items-start gap-4">
              <img src={mark} className="w-7" />
              Logical & Analytical Mindset: My background in Automation and
              Control Systems has equipped me with strong problem-solving skills
              and a systematic approach to development.
            </li>
            <li className="flex items-start gap-4">
              <img src={mark} className="w-7" />
              Integration of Smart Solutions: I leverage my knowledge of
              automation technologies to optimize web applications, ensuring
              they are not only functional but also efficient and adaptable to
              modern workflows.
            </li>
            <li className="flex items-start gap-4">
              <img src={mark} className="w-7" />
              Precision & UX/UI Design Balance: My approach bridges technical
              precision with intuitive design, ensuring that every web
              application I develop is visually compelling, user-friendly, and
              optimized for performance.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mt-6">
          I’m constantly learning and evolving with new trends in both software
          development and digital content creation, aiming to deliver full-stack
          solutions with impactful visual storytelling.
        </p>
      </div>
      <a href="../../public/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center justify-center font-bold text-[1rem] mt-10 z-10">
                    View CV <BsFileEarmarkPdf className="text-xl"/>
                  </a>
      <div className="about bg-yellow-300 absolute bottom-0 right-0 w-full h-full z-0"></div>
    </section>
  );
};

export default About;
