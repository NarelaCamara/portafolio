import Image from "next/image";
import React from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";

interface Props {}

export const Portfolio = (props: Props) => {
  return (
    <div>
      <span className="text-2xl font-bold my-4">Portafolio</span>

      <section className="m-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:accent-black:border-neutral-700 hover:dark:bg-neutral-800/30">
        <div className="flex flex-row justify-start items-center">
          <GoChevronRight size="2.5rem" className="mx-4" />
          <span className="text-2xl my-4">Udemy Practicas</span>
          <GoArrowUpRight size="2.5rem" className="mx-4" />
        </div>

        <div className="m-8 flex flex-row">
          <p className="text-base m-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            mollitia maiores laudantium earum quae blanditiis rem esse amet,
            optio, nesciunt autem, debitis inventore provident placeat minima.
            Voluptas, in. Ducimus, ad? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quisquam mollitia maiores laudantium earum quae
            blanditiis rem esse amet, optio, nesciunt autem, debitis inventore
            provident placeat minima. Voluptas, in. Ducimus, ad? Lorem ipsum,
          </p>
          <Image
            alt="User_photo"
            className="rounded-sm w-[22rem] h-[12rem] float-right m-4  "
            src={computer}
          />
        </div>
      </section>
    </div>
  );
};
