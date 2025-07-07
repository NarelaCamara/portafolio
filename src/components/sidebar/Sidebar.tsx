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
        <nav className="p-8 flex flex-col">
          {items.map((e) => (
            <SidebarItem key={e.title} title={e.title} />
          ))}
        </nav>
      </div>
    </div>
  );
};
