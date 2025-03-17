"use client";
import React, { useState } from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronDown, GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { Chip } from "../chip/Chip";
import { FaGithub, FaGlobe } from "react-icons/fa6";

interface Props {
  links?: Array<{ text: string; icon: string }>;
  subTitle?: string;
  image?: any;
  title: string;
}

export const Card = ({ links, image, title, subTitle }: Props) => {
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
    <div className=" m-2 block max-w-xl p-6  border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100   dark:hover:bg-slate-900">
      <section
        className="m-2 flex flex-col justify-start"
        onClick={(e) => onClickShowMore()}
      >
        {subTitle && (
          <span className="text-lg font-bold relative top-4">{subTitle}</span>
        )}
        <span className="text-2xl my-4">{title}</span>{" "}
        {links && (
          <div className="inline-flex rounded-md shadow-xs" role="group">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <FaGithub size="3rem" className="w-3 h-3 me-2" />
              Git hub
            </button>

            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <FaGlobe size="2rem" className="w-3 h-3 me-2" />
              Web
            </button>
          </div>
        )}
        <div>
          {image && (
            <div className="float-right m-4">
              <Image
                alt="User_photo"
                className="w-[15rem] h-[12rem]  rounded-lg"
                src={computer}
              />
            </div>
          )}
          <p className={`my-3  text-sm justify-start`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          </p>

          <div className=" py-4 w-full ">
            <div className="flex flex-row flex-wrap">
              {ITEMS.map((e) => (
                <Chip key={e} text={e} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
