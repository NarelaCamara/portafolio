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
      <div className="flex flex-col justify-start  relative m-4">
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
