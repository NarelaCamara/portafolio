import React from "react";
import { motion } from "framer-motion";
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
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        className="flex flex-row justify-start items-center py-2"
      >
        <FaLocationDot size="2.5rem" className="mx-1" />
        <span className="text-xl">Argentina, Buenos Aires</span>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        className="flex flex-row justify-start items-center py-"
      >
        <FaLinkedin size="2.5rem" className="mx-1" />
        <span className="text-xl">narelacamara</span>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        className="flex flex-row justify-start items-center py-2"
      >
        <FaEnvelope size="2.5rem" className="mx-1" />
        <span className="text-xl">Narela.camara@gmail.com</span>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        className="flex flex-row justify-start items-center py-2"
      >
        <FaGithub size="2.5rem" className="mx-1" />
        <span className="text-xl">NarelaCamara</span>
      </motion.div>
    </div>
  );
};
