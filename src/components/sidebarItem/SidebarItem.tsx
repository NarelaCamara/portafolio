import { useCallback, useEffect } from "react";

interface Props {
  title: string;
}

export const SidebarItem = ({ title }: Props) => {
  function useScrollToSection() {
    return useCallback((id: string) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, []);
  }
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && title.toLowerCase() === "acerca de mi") {
        scrollToSection(title);
      }
    };

    // Ejecutar al montar si ya estamos en desktop
    handleChange(mediaQuery);

    // Escuchar cuando cambia el tamaño de la pantalla
    mediaQuery.addEventListener("change", handleChange);

    return () => {
       mediaQuery.removeEventListener("change", handleChange);
    };
  }, [title, scrollToSection]);

  return (
    <span
      onClick={() => scrollToSection(title)}
      className="text-center lg:text-start  text-[#6C7289] font-[Montserrat]  font-medium items-stretch p-3 rounded-lg leading-tight  inline-block  text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-100 hover:translate-y-[-10px]"
    >
      {title}
    </span>
  );
};
