"use client";

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
import { IoSend } from "react-icons/io5";
import { useDataContext } from "../context/dataContext";
import { TbLoader } from "react-icons/tb";
import { LuSendHorizontal } from "react-icons/lu";
import {sendEmail} from '../functions/email'

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { dispatch, setWork } = useDataContext();
  const [loading, setLoading] = useState(false);


  const {work} = useDataContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name: name,
      email: email,
      message: message
    };
  
    setLoading(true);
    await sendEmail(formData);
    setLoading(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer className={`${work ? 'blur-xs' : 'blur-none'} px-6 sm:px-16`}>
      <section className=" border-t border-gray-600 py-10">
        {/* comment */}
        <div className="flex flex-col justify-center gap-10">
          <div>
            <div className="flex items-center justify-center gap-4">
              <img src="/feedback.png" className="w-10" />
              <h3 className="text-[1.8rem] font-bold text-center">
                Leave a comment
              </h3>
            </div>
            <p className="text-gray-400 text-sm my-2 text-center">
              For more iformations contact us.
            </p>
          </div>

          <form
            className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 w-full px-20 max-[1030px]:px-10 max-[947px]:px-0 
          max-[863px]:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-[430px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="p-4 rounded-tr-2xl rounded-bl-2xl outline-none w-full bg-[rgb(44,44,44)]"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 rounded-tr-2xl rounded-bl-2xl outline-none w-full bg-[rgb(44,44,44)]"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              placeholder="Enter your comment"
              className="w-full h-15 bg-[rgb(44,44,44)] outline-none p-4 rounded-tr-2xl rounded-bl-2xl"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button
              type="submit"
              disabled={loading}
              className={`border-2 border-white rounded-tr-2xl rounded-bl-2xl p-4 font-bold shadow-[5px_5px_0px_#fff]
                 transition-all duration-300 hover:bg-yellow-400 hover:text-black active:bg-white 
             active:shadow-none active:translate-y-1 w-full flex items-center justify-center gap-4
            ${
              loading
                ? "cursor-not-allowed bg-[rgb(19,19,19)]"
                : "cursor-pointer"
            }`}
            >
              {loading ? (
                <>
                  <TbLoader className="text-xl animate-spin" /> Processing...
                </>
              ) : (
                <>
                  Send <LuSendHorizontal className="text-xl" />
                </>
              )}
            </button>
          </form>
        </div>

        <div
          className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center gap-12
       mt-12 py-15 text-gray-400 text-sm"
        >
          <div className="w-55">
            <h3 className="text-3xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  className="flex items-center gap-2"
                  href="https://maps.app.goo.gl/yrrucr9uNBRrrTzMA"
                  target="_blank"
                >
                  <FaMapMarkerAlt /> Boumerdes, Algeria
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2" href="tel:+213560869608">
                  <FaPhone /> (+213) 560-869-608
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2"
                  href="mailto:faresaddadev@gmail.com"
                >
                  <FaEnvelope /> faresadda2001@gmail.com
                </a>
              </li>
            </ul>

            <ul className="flex gap-4 mt-4">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61571967693139"
                  target="_blank"
                  className="text-xl hover:text-gray-400"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/faresaddadev/profilecard/?igsh=MXNuc3ZxZGhmNmIwZA=="
                  target="_blank"
                  className="text-xl hover:text-gray-400"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="tiktok.com/@faresaddadev"
                  target="_blank"
                  className="text-xl hover:text-gray-400"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/faresadda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  className="text-xl hover:text-gray-400"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~01eb480f5c441bf58d"
                  target="_blank"
                  className="text-xl hover:text-gray-400"
                >
                  <FaSquareUpwork />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/faresadda"
                  target="_blank"
                  className="text-xl hover:text-gray-400"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>

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
                <li
                  className="hover:text-white transition"
                  onClick={() => {
                    dispatch({ type: "home" });
                  }}
                >
                  Home
                </li>
                <li
                  className="hover:text-white transition"
                  onClick={() => {
                    dispatch({ type: "about" });
                  }}
                >
                  About
                </li>
                <li
                  className="hover:text-white transition"
                  onClick={() => {
                    dispatch({ type: "skills" });
                  }}
                >
                  Skills
                </li>
                <li
                  className="hover:text-white transition"
                  onClick={() => {
                    dispatch({ type: "services" });
                  }}
                >
                  Services
                </li>
              </ul>
              <ul className="space-y-2">
                <li
                  className="hover:text-white transition"
                  onClick={() => {
                    dispatch({ type: "projects" });
                  }}
                >
                  Projects
                </li>
                <li className="hover:text-white transition">Certifications</li>
                <li className="hover:text-white transition">FAQ</li>
                <li
                  className="hover:text-white transition"
                  onClick={() => {
                    setWork(true);
                  }}
                >
                  Let's work
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-gray-400 text-sm font-bold">
          &copy; {new Date().getFullYear()} Fares Adda All rights reserved.
        </div>
      </section>
    </footer>
  );
}
