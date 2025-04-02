import Image from "next/image";
import React from "react";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";
import { Card } from "../card/Card";

interface Props {}

export const Portfolio = (props: Props) => {
  const proyectos = [
    {
      title: "Challenge Aerolab",
      description: "Aplicamos lo pedido para Challenge de Aerolab.",
      tecnologies: ["Next js", "Tailwind CSS"],
      links: {
        git: "https://github.com/NarelaCamara/frontend-developer-coding-challenge",
        web: "https://frontend-developer-coding-challenge-mu.vercel.app/",
      },
      image: "/computer.jpg",
    },

    {
      title: "Codificación creativa: crea piezas visuales con JavaScript",
      description:
        "Aplicacion de los aprendido en el curso Codificación creativa: crea piezas visuales con JavaScript. Aprendimos a diseñar composiciones artísticas únicas utilizando Canvas.",
      tecnologies: ["Canva", "Vite"],
      links: {
        git: "https://github.com/NarelaCamara/drawjs.git",
        web: "https://drawjs.vercel.app/",
      },
      image: "/computer.jpg",
    },

    {
      title: "Legacy - Node: De cero a experto",
      description:
        "Aplicacion de lo aprendido del curso: Legacy - Node: De cero a experto por Fernando Herrera",
      tecnologies: ["Nodemon", "Express", "Mongo", "JWT"],
      links: {
        git: "https://github.com/NarelaCamara/nodejs.git",
        web: "https://www.linkedin.com/in/narelacamara/",
      },
      image: "/computer.jpg",
    },
  ];

  return (
    <>
      {proyectos.map((e) => (
        <Card
          key={e.title}
          links={e.links}
          image={e.image}
          title={e.title}
          description={e.description}
          tecnologies={e.tecnologies}
        />
      ))}
    </>
  );
};
