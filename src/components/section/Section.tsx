import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, type ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
  title: string;
}

gsap.registerPlugin(ScrollTrigger);

export const Section = ({ title, children }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current && textRef.current) {
        // Animación del contenedor
        gsap.from(cardRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "restart restart restart restart", // ✅ se reinicia siempre
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        // Animación del texto
        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "restart restart restart restart",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="min-h-screen   relative top-[15%] pt-[15%]">
      <section ref={textRef} id={title} className={`m-8`}>
        <h2 className="text-[#FFFF] my-4 font-bold font-[Fraunces] text-2xl text-center">
          {title}
        </h2>
        <div className="my-2">{children}</div>
      </section>
    </div>
  );
};
