import React from "react";
import { SidebarItem } from "../sidebarItem/SidebarItem";
import { ITEMS } from "@/app/page";

interface Props {}

export const Sidebar = (props: Props) => {
  return (
    <>
      <div className="flex max-xl:flex-row xl:flex-col max-xl:bg-origin-content  max-xl:fixed text-white  w-full xl:max-w-[15rem] p-4 max-xl:justify-center  max-xl:z-10">
        <nav className="flex  max-xl:flex-row  xl:flex-col gap-1 min-w-[240px]  text-lg font-normal text-white">
          {ITEMS.map((e) => (
            <SidebarItem key={e.title} {...e} />
          ))}
        </nav>
      </div>
    </>
  );
};
