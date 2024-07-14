import Image from "next/image";
import React from "react";
import computer from "../../assets/computer.jpg";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";
import { Card } from "../card/Card";

interface Props {}

export const Portfolio = (props: Props) => {
  return (
    <div className="flex flex-row flex-wrap w-2/2">
      <Card link="www.google.com" image={computer} title="Udemy Practicas" />
      <Card link="www.google.com" image={computer} title="Udemy Practicas" />
      <Card link="www.google.com" image={computer} title="Udemy Practicas" />
      <Card link="www.google.com" image={computer} title="Udemy Practicas" />
    </div>
  );
};
