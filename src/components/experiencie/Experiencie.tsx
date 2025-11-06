import { Card } from "../card/Card";

export const Experiencie = () => {
  const experiencia = [
    {
      title: "Senior Frontend developer, Accenture",
      subTitle: " 2024 - Actualidad",
      description: [
        ` En mi rol actual como Senior Frontend Developer en Accenture, lidero el desarrollo de aplicaciones web utilizando React con TypeScript. Trabajo en estrecha colaboración con equipos multifuncionales para diseñar e implementar soluciones escalables y eficientes. Mi enfoque se centra en la creación de interfaces de usuario intuitivas y responsivas, aplicando las mejores prácticas de desarrollo y asegurando la calidad del código a través de revisiones y pruebas exhaustivas.`,
        `Además, participo activamente en la mentoría de desarrolladores junior, compartiendo conocimientos sobre nuevas tecnologías y metodologías ágiles. Mi experiencia incluye la integración con APIs RESTful, la optimización del rendimiento de las aplicaciones y la colaboración con diseñadores UX/UI para mejorar la experiencia del usuario final.`,
      ],
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
      description: [
        ` Desarrollé SPAs desde cero utilizando React con Js. Durante este tiempo, utilicé tecnologías como useContex y la librería otorgada por el cliente, con API REST.dome de aplicar las mejores prácticas de desarrollo y trabajar en estrecha colaboración con equipos de UX para diseñar interfaces. Además, trabajé en estrecha colaboración con el equipo de control de calidad (QA) para realizar pruebas exhaustivas, incluyendo pruebas unitarias con Jest.`,
      ],
      tecnologies: ["Rect js", "Next js"],
    },
    {
      title: "Jr Frontend developer,  It Resources",
      subTitle: " 2022 - 2023",
      description: [
        `Durante mi experiencia en IT Resources, comencé mi trayectoria realizando una capacitación intensiva en Java con Spring, que me permitió consolidar mis conocimientos en desarrollo backend.`,
        `Posteriormente, me desempeñé como desarrolladora Java durante un año y cinco meses, enfocándome en el mantenimiento e implementación de mejoras en una aplicación web del sector financiero. En este rol trabajé con tecnologías como Java, Angular, Maven, JSP, XML y SQL, contribuyendo a la estabilidad y evolución del sistema.`,
        `Más adelante, solicité un cambio de proyecto para especializarme en el desarrollo frontend con React, donde formé parte de un equipo dedicado a la modernización de una plataforma web existente. Durante este período, utilicé herramientas y librerías como React, Redux, Bootstrap y Material UI, implementando nuevos diseños e interfaces orientadas a mejorar la experiencia del usuario y la usabilidad del sistema.`,
      ],
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
