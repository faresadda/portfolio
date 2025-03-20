import { useContext, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { Blurcontext } from "../main";
import emailjs from "emailjs-com";
import comment from "../../public/comment.png"

export default function Footer({ home,about,skills,services,projects,contact }) {
  const { work, setWork, page, setPage } = useContext(Blurcontext);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const sendEmail = () => {
    emailjs.send(
      "service_02u7end", // Service ID
      "template_mh8x7vv", // Template ID
      {
        to_name: name,
        to_email: email,
        message: message,
      },
      "CjJcJs2AaQzZX7xwD" // User ID 
    )
    .then((response) => {
      console.log("✅ Email sent successfully", response.status, response.text);
      alert("Your message has been sent successfully");
    })
    .catch((error) => {
      console.log("❌ Error sending email", error);
      alert("Your message failed to send");
    });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <footer
      className={`bg-gray-900 text-white p-16 max-[416px]:px-5 ${
        (work || page !== null) && "blur-xs"
      }`}
      ref={contact}
    >
      {/* comment */}
      <div className="flex flex-col justify-center gap-10">
        <div>
          <div className="flex items-center justify-center gap-4">
            <img src={comment} className="w-10" />
            <h3 className="text-[1.8rem] font-bold text-center">Leave a comment</h3>
          </div>
          <p className="text-gray-400 text-sm my-2 text-center">
            For more iformations contact us.
          </p>
        </div>

        <form
          className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 w-full px-20 max-[1030px]:px-10 max-[947px]:px-0 
          max-[863px]:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-[430px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
          onSubmit={(e) =>{ e.preventDefault();sendEmail()}}
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="p-4 rounded-tr-2xl rounded-bl-2xl outline-none h-15 w-full bg-gray-800"
            required
            value={name}
            onChange={e=>{setName(e.target.value)}}
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 rounded-tr-2xl rounded-bl-2xl outline-none h-15 w-full bg-gray-800"
            required
            value={email}
            onChange={e=>{setEmail(e.target.value)}}
          />
          <textarea
            placeholder="Enter your comment"
            className="w-full h-15 bg-gray-800 outline-none p-4 rounded-tr-2xl rounded-bl-2xl"
            value={message}
            onChange={e=>{setMessage(e.target.value)}}
          />
          <button
            type="submit"
            className="bg-yellow-300 text-gray-800 px-6 py-2 rounded-tr-2xl rounded-bl-2xl hover:bg-yellow-400 transition h-15 w-full"
          >
            Send
          </button>
        </form>
      </div>

      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center gap-12 border-t border-gray-700 mt-12 py-15 text-gray-400 text-sm">
        {/* 📞 Contact Info */}
        <div className="w-55">
          <h3 className="text-3xl font-bold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a className="flex items-center gap-2" href="https://maps.app.goo.gl/yrrucr9uNBRrrTzMA" target="_blank"><FaMapMarkerAlt /> Boumerdes, Algeria</a></li>
            <li><a className="flex items-center gap-2" href="tel:+213560869608"><FaPhone /> (+213) 560-869-608</a></li>
            <li><a className="flex items-center gap-2" href="mailto:faresaddadev@gmail.com"><FaEnvelope /> faresaddadev@gmail.com</a></li>
          </ul>
          {/* 🌍 Social Media Icons */}
          <ul className="flex gap-4 mt-4">
            <li><a href="https://www.facebook.com/profile.php?id=61571967693139" target="_blank" className="text-xl hover:text-gray-400"><FaFacebook /></a></li>
            <li><a href="https://www.instagram.com/faresaddadev/profilecard/?igsh=MXNuc3ZxZGhmNmIwZA==" target="_blank" className="text-xl hover:text-gray-400"><FaInstagram /></a></li>
            <li><a href="tiktok.com/@faresaddadev" target="_blank" className="text-xl hover:text-gray-400"><FaTiktok /></a></li>
            <li><a href="https://www.linkedin.com/in/faresadda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-xl hover:text-gray-400"><FaLinkedin /></a></li>
            <li><a href="https://www.upwork.com/freelancers/~01eb480f5c441bf58d" target="_blank" className="text-xl hover:text-gray-400"><FaSquareUpwork /></a></li>
            <li><a href="https://github.com/faresadda" target="_blank" className="text-xl hover:text-gray-400"><FaGithub /></a></li>
          </ul>
        </div>
        {/* 🏢 About Section */}
        <div className="w-55">
          <h3 className="text-3xl font-bold mb-4">About</h3>
          <p className="text-gray-400 text-sm leading-6">
            We provide top-quality services in development, design, and tech
            consulting. Our goal is to deliver outstanding solutions to our
            clients.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-55">
            <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
            <div className="flex gap-5">
            <ul className="space-y-2">
              <li className="hover:text-white transition" onClick={()=>{home.current.scrollIntoView({behavior:"smooth"})}}>Home</li>
              <li className="hover:text-white transition" onClick={()=>{about.current.scrollIntoView({behavior:"smooth"})}}>About</li>
              <li className="hover:text-white transition" onClick={()=>{skills.current.scrollIntoView({behavior:"smooth"})}}>Skills</li>
              <li className="hover:text-white transition" onClick={()=>{services.current.scrollIntoView({behavior:"smooth"})}}>Services</li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:text-white transition" onClick={()=>{projects.current.scrollIntoView({behavior:"smooth"})}}>Projects</li>
              <li className="hover:text-white transition">Certifications</li>
              <li className="hover:text-white transition">FAQ</li>
              <li className="hover:text-white transition" onClick={()=>{setWork(true)}}>L'ets work</li>
            </ul>
            </div>
          </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 text-center text-gray-400 text-sm border-t border-gray-700">
        &copy; {new Date().getFullYear()} All rights reserved. Fares Adda.
      </div>
    </footer>
  );
}
