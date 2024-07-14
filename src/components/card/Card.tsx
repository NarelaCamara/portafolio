"use client";
import React, { useState } from "react";
import computer from "../../assets/computer.jpg";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { Chip } from "../chip/Chip";
import { motion } from "framer-motion";

interface Props {
  link?: string;
  subTitle?: string;
  image?: any;
  title: string;
}

export const Card = ({ link, image, title, subTitle }: Props) => {
  const [showAll, setshowAll] = useState(false);
  const onClickShowMore = () => {
    setshowAll(!showAll);
  };

  const ITEMS = [
    "Rect js",
    "Next js",
    "Node js",
    "React natite",
    "Redux",
    "Rect js",
    "Next js",
    "Node js",
    "React natite",
    "Redux",
  ];
  return (
    <motion.section
      initial={{ opacity: 0.6 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      whileInView={{ opacity: 1 }}
      onClick={(e) => onClickShowMore()}
      className=" m-8 p-8 group rounded-lg  cursor-pointer transition-colors border border-cyan-50 flex-row"
    >
      {subTitle && (
        <span className="text-lg font-bold px-14 relative top-4">
          {subTitle}
        </span>
      )}

      <div className="flex flex-row justify-center items-center">
        {!showAll ? (
          <GoChevronRight size="2.5rem" className="mx-2" />
        ) : (
          <GoChevronDown size="2.5rem" className="mx-2" />
        )}
        <span className="text-2xl my-4">{title}</span>
      </div>

      <div className="flex flex-col justify-center  items-center">
        {image && (
          <Image
            alt="User_photo"
            className="rounded-lg m-4 border-2"
            src={computer}
          />
        )}
      </div>

      <div
        className={
          !showAll
            ? "max-h-[4.5em] text-ellipsis line-clamp-2 overflow-hidden"
            : ""
        }
      >
        <p className={` text-base justify-start py-2 `}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          mollitia maiores laudantium earum quae blanditiis rem esse amet,
          optio, nesciunt autem, debitis inventore provident placeat minima
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        </p>

        <p className={` text-base justify-start py-2 `}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          mollitia maiores laudantium earum quae blanditiis rem esse amet,
          optio, nesciunt autem, debitis inventore provident placeat minima
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>

      <div className=" m-4 w-full ">
        <div>
          {ITEMS.map((e) => (
            <Chip key={e} text={e} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
