import Image from "next/image";
import React from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";
import { Card } from "../card/Card";

interface Props {}

export const Portfolio = (props: Props) => {
  return (
    <div>
      <span className="text-2xl font-bold my-8">Portafolio</span>

      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
