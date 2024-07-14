import React from "react";
import { SidebarItem } from "../sidebarItem/SidebarItem";
import { ITEMS } from "@/app/page";

interface Props {}

export const Sidebar = (props: Props) => {
  return (
    <>
      <div className="flex flex-col bg-clip-border rounded-xl  text-white  w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 text-lg font-normal text-white">
          {ITEMS.map((e) => (
            <SidebarItem key={e.title} {...e} />
          ))}
        </nav>
      </div>
    </>
  );
};
