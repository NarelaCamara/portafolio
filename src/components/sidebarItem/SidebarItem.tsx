"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useSession } from "@/helpers/session";
import useInView from "@/helpers/useInView";
interface Props {
  title: string;
}

export const SidebarItem = ({ title }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isinview = useInView(ref);

  const { updateSectionActive, sectionActive } = useSession();
  return (
    <div className="relative fade-slide-out ">
      <Link
        onClick={() => updateSectionActive(title)}
        href={`#${title === "Acerca de mi" ? "" : title}`}
        className=""
      >
        <span
          ref={ref}
          className={` ${!isinview ? "animate-focus-in-contract" : ""}  ${
            title === sectionActive
              ? "font-bold scale-110 translate-x-[-10px]"
              : " font-normal"
          }   items-stretch w-full p-3 rounded-lg text-start leading-tight  inline-block  text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-110 hover:translate-x-[-10px]`}
        >
          {title}
        </span>
      </Link>
    </div>
  );
};
