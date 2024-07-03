"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {}

export const Circle = (props: Props) => {
  return (
    <div>
      <motion.div
        className="bg-white border border-cyan-300 p-12"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />
    </div>
  );
};
