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
    <div className="flex flex-col justify-start">
      <div className="relative">
        <span className="flex flex-row justify-start  py-2  w-full  rounded-lg text-start leading-tight   font-normal text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]">
          <FaLocationDot size="2.5rem" className="mx-4" />
          <span className="text-xl">Argentina, Buenos Aires</span>
        </span>
      </div>

      <div className="relative">
        <span className="flex flex-row justify-start  py-2  w-full  rounded-lg text-start leading-tight   font-normal text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]">
          <FaLinkedin size="2.5rem" className="mx-4" />
          <span className="text-xl">narelacamara</span>
        </span>
      </div>

      <div className="relative">
        <span className="flex flex-row justify-start  py-2  w-full  rounded-lg text-start leading-tight   font-normal text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]">
          <FaEnvelope size="2.5rem" className="mx-4" />
          <span className="text-xl">Narela.camara@gmail.com</span>
        </span>
      </div>

      <div className="relative">
        <span className="flex flex-row justify-start  py-2  w-full  rounded-lg text-start leading-tight   font-normal text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]">
          <FaGithub size="2.5rem" className="mx-4" />
          <span className="text-xl">NarelaCamara</span>
        </span>
      </div>
    </div>
  );
};
