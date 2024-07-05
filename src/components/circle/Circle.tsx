"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {}

export const Circle = (props: Props) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -30,
        left: -30,
        right: 30,
        bottom: 30,
      }}
      className=" border border-cyan-300 p-20 rounded-full m-8"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["0%", "25%", "50%", "75%", "100%"],
      }}
    />
  );
};
