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
      <p
        className={`my-3 text-[#6C7289] text-sm text-center justify-start font-[Montserrat]`}
      >
        A continuación, se detallan mis experiencias laborales y formativas más
        relevantes:
      </p>
      {ITEMS.map((e) => (
        <Section {...e} key={e.title} />
      ))}
    </div>
  );
};
