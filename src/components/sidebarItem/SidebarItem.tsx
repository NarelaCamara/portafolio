"use client";
import React, { useRef } from "react";
import Link from "next/link";

interface Props {
  title: string;
}

export const SidebarItem = ({ title }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative fade-slide-out flex flex-row justify-center">
      <Link
        href={`#${title === "Acerca de mi" ? "" : title}`}
        className="text-center lg:text-start"
      >
        <span
          ref={ref}
          className={`  text-[#6C7289]   font-monserrat  font-normal            items-stretch w-full p-3 rounded-lg text-start leading-tight  inline-block  text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-100 hover:translate-x-[-10px]`}
        >
          {title}
        </span>
      </Link>
    </div>
  );
};
