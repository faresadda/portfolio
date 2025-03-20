import { useContext } from "react";
import title from "../../public/title.png";
import pin from "../../public/pin.png"
import mark from "../../public/mark.png"
import { Blurcontext } from "../main";
const About = ({ about }) => {
  const { work, setWork,page,setPage } = useContext(Blurcontext);
  return (
    <section
      className={`bg-gray-50 p-20 relative min-h-screen flex flex-col justify-center pt-30 max-[850px]:px-8 ${(work || page!==null) && "blur-xs"}`}
      ref={about}
    >
      <div className="z-10 relative">
        <div className="flex items-center justify-center gap-6 mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
            ABOUT
          </h2>
          <img src={title} className="title" loading="lazy"/>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          As a dedicated Front-End Developer, I specialize in React, Tailwind
          CSS, JavaScript, and various modern web technologies. My work revolves
          around building dynamic, high-performance, and responsive web
          applications that provide seamless user experiences. I emphasize
          writing clean, maintainable, and scalable code, ensuring that
          applications remain efficient, adaptable, and easy to extend over
          time.
        </p>
        <div className="text-gray-700 text-lg leading-relaxed mt-6">
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-4"><img src={mark} className="w-7"/>
              Proficiency in Modern Front-End Technologies: I have a deep
              understanding of React for building interactive UIs, Tailwind CSS
              for streamlined and responsive styling, and JavaScript for
              crafting dynamic, user-friendly interfaces.
            </li>
            <li className="flex items-start gap-4"><img src={mark} className="w-7"/>
              Focus on Performance & Optimization: My development approach
              includes code efficiency, lazy loading, and performance
              optimizations to ensure applications are fast and scalable.
            </li>
            <li className="flex items-start gap-4"><img src={mark} className="w-7"/>
              Clean & Maintainable Code: I adhere to best coding practices,
              utilizing modular architecture, reusable components, and version
              control (Git & GitHub) to maintain structured and efficient
              development workflows.
            </li>
            <li className="flex items-start gap-4"><img src={mark} className="w-7"/>
              Logical & Analytical Mindset: My background in Automation and
              Control Systems has equipped me with strong problem-solving skills
              and a systematic approach to development.
            </li>
            <li className="flex items-start gap-4"><img src={mark} className="w-7"/>
              Integration of Smart Solutions: I leverage my knowledge of
              automation technologies to optimize web applications, ensuring
              they are not only functional but also efficient and adaptable to
              modern workflows.
            </li>
            <li className="flex items-start gap-4"><img src={mark} className="w-7"/>
              Precision & UX/UI Design Balance: My approach bridges technical
              precision with intuitive design, ensuring that every web
              application I develop is visually compelling, user-friendly, and
              optimized for performance.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mt-6">
          I am continuously exploring new technologies, staying up to date with
          emerging trends in front-end development, and enhancing my skill set
          to deliver cutting-edge, user-centric web solutions.
        </p>
      </div>
      <div className="about bg-yellow-300 absolute bottom-0 right-0 w-full h-full z-0"></div>
    </section>
  );
};

export default About;
