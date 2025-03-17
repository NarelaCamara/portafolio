import { div } from "framer-motion/client";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
interface Props {}

export const Contact = (props: Props) => {
  return (
    <div className="flex flex-row">
      <iframe
        className=" max-w-xl h-auto"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
        style={{ border: 0 }}
        aria-hidden="false"
      ></iframe>

      <div className="flex flex-col justify-start  relative">
        <div className="relative">
          <span className="flex flex-row justify-start  py-2  w-full  rounded-lg text-start leading-tight   font-normal text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]">
            <FaLocationDot size="2.5rem" className="mx-4" />
            <span className="text-xl">Argentina, Buenos Aires</span>
          </span>
        </div>

        <div className="relative">
          <span className="flex flex-row justify-start  py-2  w-full  rounded-lg text-start leading-tight   font-normal text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]">
            <FaLinkedin size="2.5rem" className="mx-4" />

            <a href="#" className=" text-xl font-medium   hover:underline">
              narelacamara
            </a>
          </span>
        </div>

        <div className="relative">
          <span className="flex flex-row justify-start  py-2  w-full  rounded-lg text-start leading-tight   font-normal text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]">
            <FaEnvelope size="2.5rem" className="mx-4" />
            <span className="text-xl">Narela.camara@gmail.com</span>
          </span>
        </div>
      </div>
    </div>
  );
};
