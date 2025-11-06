import { Card } from "../card/Card";

export const Education = () => {
  const experiencia = [
    {
      title: "Universidad Nacional de Quilmes",
      subTitle: " 2018 - actualidad",
      description: [
        `Durante la carrera he adquirido una sólida formación en los fundamentos del desarrollo de software, abarcando temas como programación orientada a objetos, patrones de diseño, bases de datos relacionales, SQL, estructuras de datos (listas y grafos) y Test Driven Development (TDD).`,
        `Estos conocimientos me han permitido fortalecer mi base técnica y metodológica, favoreciendo un enfoque estructurado y de calidad en el desarrollo de soluciones de software. `,
      ],
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
