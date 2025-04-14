"use client";
import useInView from "@/helpers/useInView";
import React, { useRef } from "react";

interface Props {}

export const Nav = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isinview = useInView(ref);

  return (
    <div
      ref={ref}
      className={` ${
        !isinview ? "animate-focus-in-contract" : ""
      } flex flex-col items-center justify-center top-24 py-12    `}
    >
      <h1 className={`text-4xl mb-4`}>Narela Camara</h1>
      <h1 className={`text-2xl mb-4`}> Frontend developer</h1>
      <h1 className={`text-xl mb-4`}>Next | React | Node </h1>
    </div>
  );
};
