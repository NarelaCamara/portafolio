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
      } flex flex-col items-center max-xl:top-24 max-xl:py-12  max-xl:relative `}
    >
      <h1 className={`text-5xl mb-4"`}>Narela Camara</h1>
      <h1 className={`text-3xl mb-4"`}>Semi Senior Frontend developer</h1>
      <h1 className={`text-xl mb-4`}>Next | Node | React Native</h1>
    </div>
  );
};
