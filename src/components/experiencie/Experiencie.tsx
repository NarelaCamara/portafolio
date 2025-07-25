import { Card } from "../card/Card";

export const Experiencie = () => {
  const experiencia = [
    {
      title: "Senior Frontend developer, Accenture",
      subTitle: " 2024 - Actualidad",
      description:
        "Responsable del desarrollo de SPAs y mantenimiento de proyectos. Trabajo en estrecha colaboración con equipos multifuncionales, incluyendo DevOps, QAs, Back-end, UX y Product Owner. Mis tareas incluyen el mantenimiento, refactoring e implementación de nuevas funcionalidades, mientras realizo pruebas exhaustivas con Cypress para asegurar la estabilidad del producto.",
      tecnologies: [
        "Rect js",
        "Next js",
        ". NET",
        "Git hub",
        "Context Api",
        "hooks",
      ],
    },
    {
      title: "Semi Senior Frontend developer, Adecco",
      subTitle: " 2022 - 2023",
      description:
        "Desarrollé SPAs desde cero utilizando React con Js. Durante este tiempo, utilicé tecnologías como useContex y la librería otorgada por el cliente, con API REST.dome de aplicar las mejores prácticas de desarrollo y trabajar en estrecha colaboración con equipos de UX para diseñar interfaces. Además, trabajé en estrecha colaboración con el equipo de control de calidad (QA) para realizar pruebas exhaustivas, incluyendo pruebas unitarias con Jest.",
      tecnologies: ["Rect js", "Next js"],
    },
    {
      title: "Jr Frontend developer,  It Resources",
      subTitle: " 2022 - 2023",
      description:
        "Durante este período, mi responsabilidad principal fue implementar nuevos diseños en una plataforma web existente, mejorando así la experiencia del usuario y la funcionalidad del sistema",
      tecnologies: ["Rect js", "Next js", "Java"],
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
