import { Card } from "../card/Card";

export const Portfolio = () => {
  const proyectos = [
    {
      title: "Challenge Aerolab",
      description: "Aplicamos lo pedido para Challenge de Aerolab.",
      tecnologies: ["Next js", "Tailwind CSS"],
      links: {
        git: "https://github.com/NarelaCamara/frontend-developer-coding-challenge",
        web: "https://frontend-developer-coding-challenge-mu.vercel.app/",
      },
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
    },
  ];

  return (
    <>
      {proyectos.map((e) => (
        <Card
          key={e.title}
          links={e.links}
          title={e.title}
          description={e.description}
          tecnologies={e.tecnologies}
        />
      ))}
    </>
  );
};
