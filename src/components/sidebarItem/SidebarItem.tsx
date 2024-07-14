"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
interface Props {
  title: string;
}

export const SidebarItem = ({ title }: Props) => {
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
      className="flex items-stretch w-full p-3 rounded-lg text-start text-lg leading-tight transition-all hover:hover-color-and-transition "
    >
      <Link href={`#${title === "Acerca de mi" ? "" : title}`}>{title}</Link>
    </motion.div>
  );
};
