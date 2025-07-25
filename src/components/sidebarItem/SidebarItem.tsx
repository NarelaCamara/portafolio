"use client";

interface Props {
  title: string;
}

export const SidebarItem = ({ title }: Props) => {
  return (
    <div className="fade-slide-out flex flex-row justify-center">
      <a
        href={`#${title === "Acerca de mi" ? "" : title}`}
        className="text-center lg:text-start"
      >
        <span
          className={`  text-[#6C7289] font-[Montserrat]  font-medium items-stretch w-full p-3 rounded-lg text-start leading-tight  inline-block  text-sm transition-all duration-[0.5s] transform-gpu hover:font-bold hover:scale-100 hover:translate-x-[-10px]`}
        >
          {title}
        </span>
      </a>
    </div>
  );
};
