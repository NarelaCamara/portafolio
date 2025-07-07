"use client";
import useInView from "@/helpers/useInView";
import Image from "next/image";
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
      } flex flex-col items-center justify-center `}
    >
      <Image
        alt="User_photo"
        className="rounded-full border-2 w-64 border-[#6C7289] "
        src={"/nare.jpeg"}
        width={150}
        height={150}
      />
      <h1
        className={`text-center lg:text-start text-4xl font-extrabold mb-4 font-fraunces my-2`}
      >
        Narela Camara
      </h1>
      <h1
        className={`text-center lg:text-start text-xl mb-4 font-montserrat tracking-[0.5rem]`}
      >
        Frontend developer
      </h1>
      <h1
        className={`  mb-4 font-montserrat text-center lg:text-start text-[#6C7289]  text-xs tracking-[0.5rem]`}
      >
        Next | React | Node
      </h1>
    </div>
  );
};
