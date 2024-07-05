import React from "react";
import { SidebarItem } from "../sidebarItem/SidebarItem";

interface Props {}

export const Sidebar = (props: Props) => {
  const ITEMS = [
    { text: "Acerca de mi", icon: null },
    { text: "Experiencia", icon: null },
    { text: "Portafolio", icon: null },
    { text: "Contactame", icon: null },
  ];
  return (
    <>
      <div className="flex flex-col bg-clip-border rounded-xl  text-white  w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 text-base font-normal text-white">
          {ITEMS.map((e) => (
            <SidebarItem key={e.text} {...e} />
          ))}
        </nav>
      </div>
    </>
  );
};
