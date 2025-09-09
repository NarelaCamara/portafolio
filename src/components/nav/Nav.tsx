import { useEffect, useRef } from "react";
import nare from "../../assets/nare.jpeg";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export const Nav = () => {
  const checkList = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    gsap.set(checkList.current, { opacity: 1 });

    if (checkList.current) {
      gsap.registerPlugin(SplitText);

      // Crea un selector scoped al contenedor
      const q = gsap.utils.selector(checkList.current);

      // Selecciona todos los elementos h1 dentro del contenedor
      const paragraphs = q("h1");

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
      ref={checkList}
      className={`flex flex-col items-center justify-center  `}
    >
      <img
        alt="User_photo"
        className="rounded-full border-2  border-[#6C7289] h-[256px] w-[256px]"
        src={nare}
      />
      <h1
        className={`text-[#FFFF] text-center  text-4xl font-extrabold mb-4 font-[Fraunces] my-2`}
      >
        Narela Camara
      </h1>
      <h1
        className={`text-[#FFFF] text-center  text-xl   mb-4 font-[Montserrat] tracking-[0.5rem]`}
      >
        Frontend developer
      </h1>
      <h1
        className={`  mb-4 font-[Montserrat] text-[#6C7289] text-center     text-xs tracking-[0.5rem]`}
      >
        Next | React | Node
      </h1>
    </div>
  );
};
