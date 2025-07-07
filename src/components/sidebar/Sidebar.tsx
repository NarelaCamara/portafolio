import React from "react";
import { SidebarItem } from "../sidebarItem/SidebarItem";
import { Nav } from "../nav/Nav";

interface Props {
  items: Array<{ title: string }>;
}

export const Sidebar = ({ items }: Props) => {
  return (
    <div className="p-8">
      <Nav />
      <div className="hidden lg:block">
        <div className=" lg:block  text-white w-full p-4 bg-slate-900 flex-col flex bg-origin-content fixed justify-center z-10">
          <nav className=" relative -right-20 flex flex-col justify-center gap-1 min-w-[240px]  text-lg font-normal text-white">
            {items.map((e) => (
              <SidebarItem key={e.title} title={e.title} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
