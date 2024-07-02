"use client";
import React, { useState } from "react";
import computer from "../../assets/computer.jpg";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { Chip } from "../chip/Chip";

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
    <section
      onClick={(e) => onClickShowMore()}
      className="m-2 group rounded-lg border-transparent cursor-pointer transition-colors"
    >
      <div>
        <span className="text-lg font-bold px-14 relative top-4">
          {subTitle}
        </span>
        <div className="flex flex-row justify-start items-center">
          {!showAll ? (
            <GoChevronRight size="2.5rem" className="mx-2" />
          ) : (
            <GoChevronDown size="2.5rem" className="mx-2" />
          )}
          <span className="text-2xl my-4">{title}</span>
        </div>
        {image && (
          <Image
            alt="User_photo"
            className="rounded-sm w-[12rem] h-[10rem] float-right m-2  "
            src={computer}
          />
        )}
        <div
          className={
            !showAll
              ? "max-h-[4.5em] text-ellipsis line-clamp-3 overflow-hidden"
              : ""
          }
        >
          <p className={`text-base px-16 justify-start  `}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minimao
            llitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima
          </p>
        </div>
        <div className="my-4 px-16 ">
          <div>
            {ITEMS.map((e) => (
              <Chip key={e} text={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
