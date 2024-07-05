"use client";
import React from "react";
import { motion } from "framer-motion";
interface Props {
  text: string;
  icon: any;
}

export const SidebarItem = ({ text, icon }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileInView={{ opacity: 1 }}
      role="button"
      tabIndex={0}
      className="flex items-stretch w-full p-3 rounded-lg text-start text-lg leading-tight transition-all hover:-translate-y-2 hover:text-blue-400 "
    >
      {text}
    </motion.div>
  );
};
