import React from "react";
import { SidebarItem } from "../sidebarItem/SidebarItem";
import { ITEMS } from "@/app/page";

interface Props {}
//max-xl:bg-red-700 xl:bg-blue-600
export const Sidebar = (props: Props) => {
  return (
    <>
      <div className="flex flex-col max-xl:bg-origin-content  max-xl:fixed text-white  w-full xl:max-w-[15rem] p-4 ">
        <nav className="flex  max-xl:flex-row  xl:flex-col gap-1 min-w-[240px]  text-lg font-normal text-white">
          {ITEMS.map((e) => (
            <SidebarItem key={e.title} {...e} />
          ))}
        </nav>
      </div>
    </>
  );
};
