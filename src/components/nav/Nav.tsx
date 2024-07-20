"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {}

const NAV_JOB_TRANSITION = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    duration: 10,
    erase: [1.93, 0, 0.17, 1],
  },
  exit: { opacity: 0 },
};

const NAV_NAME_TRANSITION = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut", delay: 0.2 },
  exit: { opacity: 0 },
};

const TECNOLOGIES_TRANSITION = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    dealy: 10,
  },
  transition: { duration: 1, ease: "easeIn", delay: 0.2 },
  exit: { opacity: 0 },
};

export const Nav = (props: Props) => {
  return (
    <div className="flex flex-col items-center max-xl:top-24 max-xl:py-12  max-xl:relative ">
      <motion.h1 {...NAV_NAME_TRANSITION} className="text-5xl mb-4">
        Narela Camara
      </motion.h1>
      <motion.h1 {...NAV_JOB_TRANSITION} className="text-3xl mb-4">
        Semi Senior Frontend developer
      </motion.h1>
      <motion.h1 {...TECNOLOGIES_TRANSITION} className="text-xl mb-4">
        Next | Node | React Native
      </motion.h1>
    </div>
  );
};
