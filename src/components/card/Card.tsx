"use client";
import React, { useState } from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronDown, GoChevronRight } from "react-icons/go";
import Image from "next/image";

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
          <p
            className={`text-base px-16 justify-start ${
              !showAll
                ? "max-h-[4.5em] text-ellipsis line-clamp-3  overflow-hidden"
                : ""
            } `}
          >
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
      </div>
    </section>
  );
};
