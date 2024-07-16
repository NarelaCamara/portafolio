"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: any;
  title: string;
}

const SECTION_TRANSITION = {};

export const Section = ({ title, children }: Props) => {
  return (
    <motion.section
      id={title}
      className="min-h-screen flex flex-col flex-nowrap justify-start items-start"
    >
      <span className="text-3xl">{title}</span>

      <motion.div className="my-4 text-clip ">{children}</motion.div>
    </motion.section>
  );
};
