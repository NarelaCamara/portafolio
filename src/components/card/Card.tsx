"use client";
import React, { useState } from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronDown, GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { Chip } from "../chip/Chip";

interface Props {
  link?: string;
  image?: any;
  title: string;
}

export const Card = ({ link, image, title }: Props) => {
  const [showAll, setshowAll] = useState(false);
  const onClickShowMore = () => {
    setshowAll(!showAll);
  };

  const ITEMS = [
    "Rect js",
    "Next js",
    "Node js",
    "React natite",
    "Router dom",
    "Tailwind",
    "Redux",
  ];
  return (
    <section
      onClick={(e) => onClickShowMore()}
      className="m-4 group rounded-lg border-transparent transition-colors hover:opacity-80 hover:text-blue-500 hover:bg-white hover:-translate-y-2 cursor-pointer border "
    >
      <div className="m-4 flex flex-row">
        <div>
          <div className="flex flex-row justify-start items-center">
            {!showAll ? (
              <GoChevronRight size="2.5rem" className="mx-2" />
            ) : (
              <GoChevronDown size="2.5rem" className="mx-2" />
            )}
            <span className="text-2xl my-4">{title}</span>
            {link && <GoArrowUpRight size="2.5rem" className="mx-2" />}
          </div>
          {image && (
            <Image
              alt="User_photo"
              className="rounded-sm w-[22rem] h-[12rem] float-right m-2  "
              src={computer}
            />
          )}
          <div
            className={
              !showAll
                ? "max-h-[4.5em] text-ellipsis line-clamp-3  overflow-hidden"
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

            <div className="my-4 px-16 ">
              <span className="text-lg my-8">Tecnologias</span>

              <div>
                {ITEMS.map((e) => (
                  <Chip key={e} text={e} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
