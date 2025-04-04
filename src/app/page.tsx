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
import { FaGlobe } from "react-icons/fa6";

export default function Home() {
  const ITEMS = [
    {
      children: <About />,
      title: "Acerca de mi",
    },
    {
      children: <Portfolio />,
      title: "Portfolio",
    },
    {
      children: <Experiencie />,
      title: "Experiencia",
    },
    {
      children: <Education />,
      title: "Educación",
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
        <main className="    bg-slate-950 flex xl:flex-row max-xl:flex-col align-middle ">
          <div className=" xl:w-1/3 flex flex-col items-center  max-xl:top-10 bg-slate-950 xl:p-2">
            <div className=" fixed bg-blue-600 ">
              <Image
                alt="User_photo"
                className="rounded-full border-2 m-2 p-2 "
                src={"/nare.jpeg"}
                width={300}
                height={300}
              />
              <Nav />
              <Sidebar items={ITEMS} />
            </div>
          </div>

          <div className="xl:w-2/4 xl:left-1/3">
            {ITEMS.map((e) => (
              <Section {...e} key={e.title} />
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
