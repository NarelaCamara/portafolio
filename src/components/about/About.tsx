import React from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";

interface Props {
  description: string;
}
//max-xl:bg-red-700
export const About = () => {
  const description_split = [
    "Tengo 28 años y soy Developer Frontend, me especializo en react y next. Estudié en la universidad , la carrera tecnicatura en desarrollo de software.",
    "He acumulado experiencia trabajando en proyectos desafiantes en IT Resources, Adecco y Accenture, donde tuve la oportunidad de colaborar con equipos talentosos y coordinar con diversas disciplinas.",
    "Me considero una persona independiente y meticulosa, siempre en busca de la excelencia en cada línea de código.Orgullosa de ser una apasionada del aprendizaje constante, estoy ansiosa por enfrentar nuevos desafíos en el mundo del desarrollo.Sin más que decir, nos estamos hablando!",
  ];
  return (
    <>
      <div className="flex flex-col max-md:flex-col   relative w-full custom: ">
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
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaDownload size="1.5rem" className="w-3.5 h-3.5 me-2" />
            Descarga CV
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaLinkedin size="1.5rem" className="w-3.5 h-3.5 me-2" />
            Linkedin
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaGithub size="1.5rem" className="w-3.5 h-3.5 me-2" />
            Git hub
          </button>
        </div>
      </div>
    </>
  );
};
