"use client";
import React from "react";
import { motion } from "framer-motion";
import { NAV_TRANSITION } from "@/helpers/transitions";

interface Props {}

export const Nav = (props: Props) => {
  return (
    <div className="flex flex-col items-center max-w-[36rem]">
      <motion.h1 {...NAV_TRANSITION} className="text-5xl mb-4">
        Roxana Narela Camara
      </motion.h1>
      <motion.h1 {...NAV_TRANSITION} className="text-3xl mb-4">
        Semi Senior Frontend developer
      </motion.h1>
      <motion.h1 {...NAV_TRANSITION} className="text-xl mb-4">
        Next | Node | React Native
      </motion.h1>
    </div>
  );
};
