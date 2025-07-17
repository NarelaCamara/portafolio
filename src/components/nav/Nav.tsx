"use client";
import Image from "next/image";
import React from "react";

interface Props {}

export const Nav = (props: Props) => {
  return (
    <div
      className={` 
        flex flex-col items-center justify-center `}
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
