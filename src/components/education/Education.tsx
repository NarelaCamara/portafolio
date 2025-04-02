import React from "react";
import { Card } from "../card/Card";

interface Props {}

export const Education = (props: Props) => {
  const experiencia = [
    {
      title: "Universidad Nacional de Quilmes",
      subTitle: " 2018 - actualidad",
      description:
        "Actualmente me encuentro estudiando la Tecnicatura en Desarrollo de Software",
      tecnologies: ["POO", "Patrones de diseño", "SQL", "TDD"],
    },
  ];

  return (
    <>
      {experiencia.map((e) => (
        <Card
          key={e.title}
          title={e.title}
          subTitle={e.subTitle}
          tecnologies={e.tecnologies}
          description={e.description}
        />
      ))}
    </>
  );
};
