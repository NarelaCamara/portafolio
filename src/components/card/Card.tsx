import React from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";
import Image from "next/image";

interface Props {}

export const Card = (props: Props) => {
  return (
    <section className="m-4 group rounded-lg border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:accent-black:border-neutral-700 hover:dark:bg-neutral-800/30 hover:-translate-y-2  cursor-pointer border">
      <div className="m-8 flex flex-row">
        <div>
          <div className="flex flex-row justify-start items-center">
            <GoChevronRight size="2.5rem" className="mx-2" />
            <span className="text-2xl my-4">Udemy Practicas</span>
            <GoArrowUpRight size="2.5rem" className="mx-2" />
          </div>

          <p className="text-base px-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima...
            <b>Ver más</b>
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
