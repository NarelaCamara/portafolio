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
        // Estado inicial oculto
        gsap.set([cardRef.current, textRef.current], { opacity: 0 });

        // Animación del contenedor
        gsap.fromTo(
          cardRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 75%", // ✅ aparece cuando entra en el 25% inferior del viewport
              toggleActions: "restart none restart none", // ✅ se repite arriba y abajo
            },
          }
        );

        // Animación del texto
        gsap.fromTo(
          textRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 75%",
              toggleActions: "restart none restart none",
            },
          }
        );
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
