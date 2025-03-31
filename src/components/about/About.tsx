import React from "react";

interface Props {
  description: string;
}
//max-xl:bg-red-700
export const About = () => {
  const description_split = [
    "Hola! Mi nombre es Narela, tengo 28 años y soy Developer Frontend, me especializo en react y next. Estudié en la universidad , la carrera tecnicatura en desarrollo de software.",
    "He acumulado experiencia trabajando en proyectos desafiantes en IT Resources, Adecco y Accenture, donde tuve la oportunidad de colaborar con equipos talentosos y coordinar con diversas disciplinas.",
    "Me considero una persona independiente y meticulosa, siempre en busca de la excelencia en cada línea de código.Orgullosa de ser una apasionada del aprendizaje constante, estoy ansiosa por enfrentar nuevos desafíos en el mundo del desarrollo.Sin más que decir, nos estamos hablando!",
  ];
  return (
    <>
      <div className="flex max-md:flex-col flex-row-reverse relative w-full custom: ">
        <div className="flex flex-col justify-start w-full ">
          {description_split.map((e: string) => {
            return (
              <p key={e} className={` text-base justify-start pb-8`}>
                {e}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};
