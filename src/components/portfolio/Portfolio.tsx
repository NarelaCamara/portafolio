import Image from "next/image";
import React from "react";
import { GoArrowUpRight, GoChevronRight } from "react-icons/go";
import { Card } from "../card/Card";

interface Props {}

export const Portfolio = (props: Props) => {
  const proyectos = [
    {
      title: "Challenge Aerolab",
      description:
        "Este es mi proyecto para Aerolab Frontend Developer Coding Challenge. La aplicación es una plataforma web interactiva que permite a los usuarios buscar y coleccionar videojuegos digitalmente, utilizando la API de IGDB para obtener información actualizada sobre videojuegos y el almacenamiento del navegador/dispositivo para guardar datos localmente. Además, incluye funcionalidades para explorar productos, ganar puntos y redimirlos.",
      tecnologies: ["Next js", "Tailwind CSS"],
      links: {
        git: "https://github.com/NarelaCamara/frontend-developer-coding-challenge",
        web: "https://frontend-developer-coding-challenge-mu.vercel.app/",
      },
      image: "/computer.jpg",
    },

    {
      title:
        "Curso Domestica - Codificación creativa: crea piezas visuales con JavaScript",
      description:
        "Aprendimos a diseñar composiciones artísticas únicas utilizando Canvas y la programación creativa.",
      tecnologies: ["Canva", "Vite"],
      links: {
        git: "https://github.com/NarelaCamara/drawjs.git",
        web: "https://drawjs.vercel.app/",
      },
      image: "/computer.jpg",
    },

    {
      title: "Curso - Legacy - Node: De cero a experto",
      description:
        "Mi objetivo con este curso, es aprender Node con ejercicios reales y aplicables en la vida real, aprender haciendo aplicaciones, incrementando la complejidad de las mismas poco a poco",
      tecnologies: ["Nodemon", "Express", "Mongo"],
      links: {
        git: "https://github.com/NarelaCamara/nodejs.git",
        web: "https://www.linkedin.com/in/narelacamara/",
      },
      image: "/computer.jpg",
    },
  ];

  return (
    <>
      <div>
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
      </div>
    </>
  );
};
