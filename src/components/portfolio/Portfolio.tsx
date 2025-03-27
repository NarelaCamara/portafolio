import Image from "next/image";
import React from "react";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";
import { Card } from "../card/Card";

interface Props {}

export const Portfolio = (props: Props) => {
  const proyectos = [
    {
      title: "Udemy Practicas",
      description:
        "Este proyecto es una réplica de la página oficial de Abstract, desarrollada para practicar y mejorar habilidades en Next.js y Tailwind CSS. El objetivo es replicar el diseño, la disposición y algunos elementos interactivos de la página original.",
      tecnologies: ["Next js", "Tailwind CSS"],
      links: {
        text: "https://www.linkedin.com/in/narelacamara/",
        icon: "https://www.linkedin.com/in/narelacamara/",
      },
      image: "/computer.jpg",
    },
    {
      title: "Udemy Practicas",
      description:
        "Este proyecto es una réplica de la página oficial de Abstract, desarrollada para practicar y mejorar habilidades en Next.js y Tailwind CSS. El objetivo es replicar el diseño, la disposición y algunos elementos interactivos de la página original.",
      tecnologies: ["Next js", "Tailwind CSS"],
      links: {
        text: "https://www.linkedin.com/in/narelacamara/",
        icon: "https://www.linkedin.com/in/narelacamara/",
      },
      image: "/computer.jpg",
    },
    {
      title: "Udemy Practicas",
      description:
        "Este proyecto es una réplica de la página oficial de Abstract, desarrollada para practicar y mejorar habilidades en Next.js y Tailwind CSS. El objetivo es replicar el diseño, la disposición y algunos elementos interactivos de la página original.",
      tecnologies: ["Next js", "Tailwind CSS"],
      links: {
        text: "https://www.linkedin.com/in/narelacamara/",
        icon: "https://www.linkedin.com/in/narelacamara/",
      },
      image: "/computer.jpg",
    },
  ];

  return (
    <>
      <p className={` text-lg justify-start`}>
        Proyectos propios que reflejan mis habilidades y conocimientos.
      </p>
      <div className="flex flex-row flex-wrap xl:w-2/2 xl:p-16">
        {proyectos.map((e) => (
          <Card
            key={e.title}
            links={[e.links]}
            image={e.image}
            title={e.title}
            description={e.description}
            tecnologies={e.tecnologies}
          />
        ))}
      </div>
    </>
  );
};
