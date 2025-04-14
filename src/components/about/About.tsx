import React from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";

interface Props {
  description: string;
}

export const About = () => {
  const description_split = [
    "Soy Developer Frontend, especializada en React y Next.",
    "A lo largo de mi carrera, he trabajado en IT Resources, Adecco y Accenture, donde tuve la oportunidad de colaborar con equipos talentosos en proyectos desafiantes. Mi experiencia incluye la creación de SPAs desde cero, la migración de aplicaciones obsoletas, la implementación de nuevas funcionalidades y la coordinación con diversas disciplinas para lograr desarrollos eficientes y escalables.",
    "Tengo conocimientos en Programación Orientada a Objetos (POO), patrones de componentes, patrones de diseño, SQL y no SQL , clean code y arquitectura hexagonal aplicada al frontend.",
    "Me considero una persona independiente y meticulosa, en busca de la excelencia en cada línea de código. Siempre busco mejorar mis habilidades y aportar valor a cada proyecto en el que participo.",
  ];
  return (
    <>
      <div className="flex flex-col relative w-full">
        <b className="text-3xl pb-3">Hola! Mi nombre es Narela</b>
        <div className="flex flex-col justify-start w-full ">
          {description_split.map((e: string) => {
            return (
              <p key={e} className={` text-base justify-start pb-8`}>
                {e}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col lg:flex-row align-middle">
          <div className="p-2">
            <a
              href="/cv-NarelaRCamara.pdf"
              download="cv-NarelaCamara.pdf"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaDownload size="1.5rem" className="w-3.5 h-3.5 me-2" />
                Descarga CV
              </button>
            </a>
          </div>

          <div className="p-2">
            <button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/narelacamara/",
                  "_blank"
                );
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaLinkedin size="1.5rem" className="w-3.5 h-3.5 me-2" />
              Linkedin
            </button>
          </div>

          <div className="p-2">
            <button
              type="button"
              onClick={() => {
                window.open("https://github.com/NarelaCamara", "_blank");
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaGithub size="1.5rem" className="w-3.5 h-3.5 me-2" />
              Git hub
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
