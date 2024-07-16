"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
interface Props {
  title: string;
}

export const SidebarItem = ({ title }: Props) => {
  return (
    <div className="relative">
      <span className="items-stretch w-full p-3 rounded-lg text-start leading-tight  inline-block font-normal text-base transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]">
        <Link href={`#${title === "Acerca de mi" ? "" : title}`}>{title}</Link>
      </span>
    </div>
  );
};
