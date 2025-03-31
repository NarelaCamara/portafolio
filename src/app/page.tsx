"use client";
/* eslint-disable @next/next/no-sync-scripts */
import {
  About,
  Contact,
  Experiencie,
  Nav,
  Portfolio,
  Section,
  Sidebar,
} from "@/components";

import { SessionContextProvider } from "@/helpers/session";
import Image from "next/image";

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
      children: <Contact />,
      title: "Contactame",
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
        <SessionContextProvider>
          <main className="min-h-screen px-6 max-w-[250rem] bg-slate-950">
            <div className=" flex flex-col items-center xl:fixed z-10 xl:w-1/3 xl:top-16 max-xl:top-10 bg-slate-950">
              <div className=" relative -left-5 ">
                <Image
                  alt="User_photo"
                  className="rounded-full border-2 m-2 p-2 w-[20rem] h-[20rem] max-xl:mt-20"
                  src={"/nare.jpeg"}
                  width={300}
                  height={300}
                />
              </div>
              <Nav />
              <Sidebar items={ITEMS} />
            </div>

            <div className="px-12 xl:w-2/4    max-xl:w-full flex flex-col items-center relative xl:left-1/3 ">
              {ITEMS.map((e) => (
                <Section {...e} key={e.title} />
              ))}
            </div>
          </main>
        </SessionContextProvider>
      </body>
    </html>
  );
}
