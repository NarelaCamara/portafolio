"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(`.${title}`, {
    scrollTrigger: `.${title}`,
    opacity: 1,
    y: 0,
    duration: 5,
    ease: "power2.out",
  });

  return (
    <section
      className={`${title} relative top-[15vh] max-w-[750px] h-full bg-slate-900`}
    >
      {
        <p className="text-[#FFFF] my-4 font-bold font-[Fraunces] text-2xl text-center lg:text-start lg:text-4xl">
          {title}
        </p>
      }
      <div className="my-2">{children}</div>
    </section>
  );
};
