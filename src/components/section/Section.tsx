"use client";
import React, { useEffect, useRef, useState } from "react";
import useInView from "@/helpers/useInView";
import { useSession } from "@/helpers/session";

interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  return (
    <section id={title} className={`w-full bg-slate-950 sticky top-0`}>
      {<p className="text-3xl p-3 font-bold">{title}</p>}

      <div className="">{children}</div>
    </section>
  );
};
