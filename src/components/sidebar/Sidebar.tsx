import React from "react";
import { SidebarItem } from "../sidebarItem/SidebarItem";
import Image from "next/image";
import { Nav } from "../nav/Nav";

interface Props {
  items: Array<{ title: string }>;
}

export const Sidebar = ({ items }: Props) => {
  return (
    <div className=" lg:w-1/3 flex flex-col items-center relative lg:top-10 bg-slate-950 lg:p-2">
      <div className="fixed">
        <Image
          alt="User_photo"
          className="rounded-full border-2 m-2 p-2 "
          src={"/nare.jpeg"}
          width={300}
          height={300}
        />
        <Nav />
        <div className="bg-slate-950 flex flex-col lg:flex-row  lg:bg-origin-content  lg:fixed text-white  w-full lg:w-[15rem] p-4 lg:justify-center  lg:z-10">
          <nav className="flex flex-row xl:flex-col gap-1 min-w-[240px]  text-lg font-normal text-white">
            {items.map((e) => (
              <SidebarItem key={e.title} title={e.title} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
