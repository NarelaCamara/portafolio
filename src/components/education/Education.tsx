import { Card } from "../card/Card";

export const Education = () => {
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
