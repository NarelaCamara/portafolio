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
      className="min-h-screen flex flex-col flex-nowrap justify-center items-start  pb-16"
    >
      {title !== "Acerca de mi" && (
        <span className="text-5xl py-8 m-4">{title}</span>
      )}

      <motion.div className="m-4 text-clip ">{children}</motion.div>
    </motion.section>
  );
};
