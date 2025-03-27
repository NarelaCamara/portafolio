import React from "react";
import { Card } from "../card/Card";

interface Props {}

export const Experiencie = (props: Props) => {
  const experiencia = [
    {
      title: "Senior Frontend developer, Accenture",
      subTitle: " 2024 - Present",
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
      title: "Semi Senior Frontend developer, ADECCO",
      subTitle: " 2022 - 2023",
      description:
        "Desarrollé SPAs desde cero utilizando React con Js. Durante este tiempo, utilicé tecnologías como useContex y la librería otorgada por el cliente, con API REST.dome de aplicar las mejores prácticas de desarrollo y trabajar en estrecha colaboración con equipos de UX para diseñar interfaces. Además, trabajé en estrecha colaboración con el equipo de control de calidad (QA) para realizar pruebas exhaustivas, incluyendo pruebas unitarias con Jest.",
      tecnologies: ["Rect js", "Next js"],
    },
    {
      title: "Jr Frontend developer,  IT RESOURCES",
      subTitle: " 2022 - 2023",
      description:
        "Durante este período, mi responsabilidad principal fue implementar nuevos diseños en una plataforma web existente, mejorando así la experiencia del usuario y la funcionalidad del sistema",
      tecnologies: ["Rect js", "Next js", "Java"],
    },
  ];

  return (
    <>
      <p className={` text-lg justify-start`}>
        Mi experiencia profesional. Haz clic aquí para ver el <b>CV</b>{" "}
        completo.
      </p>

      <div className="flex flex-col xl:m-16">
        {experiencia.map((e) => (
          <Card
            key={e.title}
            title={e.title}
            subTitle={e.subTitle}
            tecnologies={e.tecnologies}
            description={e.description}
          />
        ))}
      </div>
    </>
  );
};
