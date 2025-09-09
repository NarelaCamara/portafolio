import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef, type ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
  title: string;
}

export const Section = ({ title, children }: Props) => {
  const navigation = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    gsap.set(navigation.current, { opacity: 1 });

    if (navigation.current) {
      gsap.registerPlugin(SplitText);

      // Crea un selector scoped al contenedor
      const q = gsap.utils.selector(navigation.current);

      // Selecciona todos los elementos h2 dentro del contenedor
      const paragraphs = [...q("p"), ...q("h2")];

      const split = SplitText.create(paragraphs, { type: "words,chars" });
      //now animate each character into place from 20px below, fading in:
      gsap.from(split.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.01,
      });
    }
  }, []);

  return (
    <div
      ref={navigation}
      className="min-h-screen   relative top-[15%] pt-[15%]"
    >
      <section id={title} className={`m-8`}>
        <h2 className="text-[#FFFF] my-4 font-bold font-[Fraunces] text-2xl text-center">
          {title}
        </h2>
        <div className="my-2">{children}</div>
      </section>
    </div>
  );
};
