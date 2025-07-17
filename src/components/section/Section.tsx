"use client";
import React from "react";

interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  return (
    <section
      id={title}
      className={`md:h-screen relative top-[15vh] max-w-[750px]`}
    >
      {
        <p className="my-4 font-bold font-fraunces text-2xl text-center lg:text-start lg:text-4xl">
          {title}
        </p>
      }
      <div className="my-2">{children}</div>
    </section>
  );
};
