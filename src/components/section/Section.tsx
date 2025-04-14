"use client";
import React from "react";

interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  return (
    <section id={title} className={`bg-slate-950 w-full sticky`}>
      {<p className="text-3xl p-3 font-bold">{title}</p>}

      <div className="p-2">{children}</div>
    </section>
  );
};
