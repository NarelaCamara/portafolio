"use client";
import React, { useState } from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronDown, GoChevronRight } from "react-icons/go";
import Image from "next/image";

interface Props {}

export const Card = (props: Props) => {
  const [showAll, setshowAll] = useState(false);
  const onClickShowMore = () => {
    setshowAll(!showAll);
  };
  return (
    <section
      onClick={(e) => onClickShowMore()}
      className="m-4 group rounded-lg border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:accent-black:border-neutral-700 hover:dark:bg-neutral-800/30 hover:-translate-y-2  cursor-pointer border"
    >
      <div className="m-8 flex flex-row">
        <div>
          <div className="flex flex-row justify-start items-center">
            {!showAll ? (
              <GoChevronRight size="2.5rem" className="mx-2" />
            ) : (
              <GoChevronDown size="2.5rem" className="mx-2" />
            )}
            <span className="text-2xl my-4">Udemy Practicas</span>
            <GoArrowUpRight size="2.5rem" className="mx-2" />
          </div>

          <p
            className={`text-base px-16   ${
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
            optio, nesciunt autem, debitis inventore provident placeat minima
          </p>
        </div>
        <Image
          alt="User_photo"
          className="rounded-sm w-[22rem] h-[12rem] float-right m-2  "
          src={computer}
        />
      </div>
    </section>
  );
};
