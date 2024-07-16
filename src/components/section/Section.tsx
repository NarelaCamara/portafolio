"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import useInView from "@/helpers/useInView";
import { useSession } from "@/helpers/session";

interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const { updateSectionActive, sectionActive } = useSession();

  useEffect(() => {
    if (!!isInView) {
      updateSectionActive(title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <section
      ref={ref}
      id={title}
      className="min-h-screen flex flex-col flex-nowrap justify-start items-start"
    >
      <span className="text-3xl">{title}</span>

      <div className="my-4 text-clip ">{children}</div>
    </section>
  );
};
