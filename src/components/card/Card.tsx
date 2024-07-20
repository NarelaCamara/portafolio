"use client";
import React, { useState } from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronDown, GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { Chip } from "../chip/Chip";
import { CardAnimation } from "./CardAnimation";

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
  //max-xl:bg-red-700 xl:bg-blue-600
  return (
    <CardAnimation>
      <section
        className="m-2 flex flex-col justify-start"
        onClick={(e) => onClickShowMore()}
      >
        {subTitle && (
          <span className="text-lg font-bold relative top-4">{subTitle}</span>
        )}

        <div className="flex flex-row justify-start items-center">
          <span className="text-2xl my-4">{title}</span>
          <GoArrowUpRight size="1.5rem" className="mx-2" />
        </div>

        <div>
          {image && (
            <Image
              alt="User_photo"
              className="rounded-sm w-[15rem] h-[12rem] float-right mt-2 mx-2 mr-4 mb-4 border-2  "
              src={computer}
            />
          )}
          <p className={` text-base justify-start`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          </p>

          <div className=" my-4 w-full ">
            <div>
              {ITEMS.map((e) => (
                <Chip key={e} text={e} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </CardAnimation>
  );
};
