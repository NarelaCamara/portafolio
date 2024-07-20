"use client";
/* eslint-disable @next/next/no-sync-scripts */
import {
  About,
  Circle,
  Contact,
  Nav,
  Portfolio,
  Section,
  Sidebar,
} from "@/components";

import { Experiencie } from "@/components/experiencie/Experiencie";
import { SessionContextProvider } from "@/helpers/session";


export const ITEMS = [
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

export default function Home() {
 

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
          <main className="min-h-screen px-6 max-lg:bg-red-700 bg-blue-600">
            <div className=" flex flex-col items-center xl:fixed z-10 xl:w-1/3 xl:top-60 max-lg:top-10 ">
              <Nav />
              <Sidebar />
            </div>

            <div className="px-12 xl:w-2/3  max-lg:w-full flex flex-col items-center relative xl:left-1/3 ">
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
