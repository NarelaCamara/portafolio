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
    <div className="flex flex-col ">
      <div className="flex flex-row justify-start items-center py-1">
        <FaLinkedin size="2.5rem" className="mx-1" />
        <span className="text-xl">/in/narelacamara</span>
      </div>

      <div className="flex flex-row justify-start items-center py-2">
        <FaGithub size="2.5rem" className="mx-1" />
        <span className="text-xl">/NarelaCamara</span>
      </div>

      <div className="flex flex-row justify-start items-center py-2">
        <FaEnvelope size="2.5rem" className="mx-1" />
        <span className="text-xl">Narela.camara@gmail.com</span>
      </div>

      <div className="flex flex-row justify-start items-center py-2">
        <FaLocationDot size="2.5rem" className="mx-1" />
        <span className="text-xl">Argentina, Buenos Aires</span>
      </div>
    </div>
  );
};
