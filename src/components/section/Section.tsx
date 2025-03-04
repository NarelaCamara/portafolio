"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [change, setChange] = useState(isInView);

  useEffect(() => {
    if (!!isInView) {
      updateSectionActive(title);
      setChange(true);
    } else if (change) {
      setTimeout(() => {
        setChange(false);
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <section
      ref={ref}
      id={title}
      className={`${isInView ? "animate-fade-slide-in " : "invisible"} ${
        change ? "" : "fade-slide-out"
      }  min-h-screen flex flex-col flex-nowrap justify-center items-start pt-20`}
    >
      <span className="text-3xl pb-5">{title}</span>

      <div className="my-4 text-clip  ">{children}</div>
    </section>
  );
};
