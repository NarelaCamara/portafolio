import { Education } from "../education/Education";
import { Experiencie } from "../experiencie/Experiencie";
import { Section } from "../section/Section";

export const CareerPath = () => {
  const ITEMS = [
    {
      children: <Experiencie />,
      title: "Experiencia",
    },
    {
      children: <Education />,
      title: "Educación",
    },
  ];
  return (
    <div>
      {ITEMS.map((e) => (
        <Section {...e} key={e.title} />
      ))}
    </div>
  );
};
