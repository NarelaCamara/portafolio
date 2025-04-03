"use client";
/* eslint-disable @next/next/no-sync-scripts */
import {
  About,
  Education,
  Experiencie,
  Nav,
  Portfolio,
  Section,
  Sidebar,
} from "@/components";

import { SessionContextProvider } from "@/helpers/session";
import Image from "next/image";
import { FaContao } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";

export default function Home() {
  const ITEMS = [
    {
      children: <About />,
      title: "Acerca de mi",
      icon: <RiContactsLine size={200} />,
    },
    {
      children: <Portfolio />,
      title: "Portfolio",
      icon: <RiContactsLine size={200} />,
    },
    {
      children: <Experiencie />,
      title: "Experiencia",
      icon: <RiContactsLine size={200} />,
    },
    {
      children: <Education />,
      title: "Educación",
      icon: <RiContactsLine size={200} />,
    },
  ];
  return (
    <html>
      <head>
        <script
          src="https://example.com/fontawesome/vVERSION/js/all.js"
          data-auto-a11y="true"
        ></script>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>
        <main className="min-h-screen px-6 max-w-[250rem] bg-slate-950 flex xl:flex-row max-xl:flex-col align-middle ">
          <div className=" xl:w-1/3 flex flex-col items-center xl:fixed max-xl:top-10 bg-slate-950 xl:p-2">
            <div className="relative max-xl:top-28 ">
              <Image
                alt="User_photo"
                className="rounded-full border-2  m-2 p-2 "
                src={"/nare.jpeg"}
                width={300}
                height={300}
              />
            </div>
            <Nav />
            <Sidebar items={ITEMS} />
          </div>

          <div className="xl:w-2/4 xl:left-1/3 relative">
            {ITEMS.map((e) => (
              <Section {...e} key={e.title} />
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
