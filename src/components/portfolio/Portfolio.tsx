import Image from "next/image";
import React from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";
import { Card } from "../card/Card";

interface Props {}

export const Portfolio = (props: Props) => {
  return (
    <>
      <p className={` text-lg justify-start`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        laudantium earum quae blanditiis rem esse amet, optio, nesciunt autem
        consequuntur! Ipsum atque et voluptas doloremque, quas est ab maxime
        distinctio magni?
      </p>
      <div className="flex flex-row flex-wrap xl:w-2/2 xl:p-16">
        <Card
          links={[{ text: "", icon: "" }]}
          image={computer}
          title="Udemy Practicas"
        />
        <Card
          links={[{ text: "", icon: "" }]}
          image={computer}
          title="Udemy Practicas"
        />
        <Card
          links={[{ text: "", icon: "" }]}
          image={computer}
          title="Udemy Practicas"
        />
        <Card
          links={[{ text: "", icon: "" }]}
          image={computer}
          title="Udemy Practicas"
        />
      </div>
    </>
  );
};
