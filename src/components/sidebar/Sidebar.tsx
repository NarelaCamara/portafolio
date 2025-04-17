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
      <div className="p-2 lg:fixed">
        <Image
          alt="User_photo"
          className="rounded-full border-2 m-2 p-2 "
          src={"/nare.jpeg"}
          width={300}
          height={300}
        />
        <Nav />
        <div className="hidden  text-white w-full p-4 bg-slate-950 flex-col lg:flex lg:bg-origin-content lg:fixed lg:justify-center lg:z-10">
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
