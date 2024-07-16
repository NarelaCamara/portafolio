"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "@/helpers/session";
interface Props {
  title: string;
}

export const SidebarItem = ({ title }: Props) => {
  const { updateSectionActive, sectionActive } = useSession();
  return (
    <div className="relative">
      <span
        className={`${
          title === sectionActive
            ? "font-bold scale-110 translate-x-[-10px]"
            : " font-normal"
        } items-stretch w-full p-3 rounded-lg text-start leading-tight  inline-block  text-base transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]`}
      >
        <Link
          onClick={() => updateSectionActive(title)}
          href={`#${title === "Acerca de mi" ? "" : title}`}
        >
          {title}
        </Link>
      </span>
    </div>
  );
};
