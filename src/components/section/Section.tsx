"use client";
import React from "react";

interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  return (
    <section id={title} className={`lg:h-screen pt-32`}>
      {
        <p className=" p-3 font-bold font-fraunces text-2xl lg:text-4xl text-center lg:text-start">
          {title}
        </p>
      }
      {children}
    </section>
  );
};
