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
      </head>
      <body>
        <SessionContextProvider>
          <main className="min-h-screen flex flex-row relative m-24">
            <div className="fixed w-screen p-0 m-0 top-0">
              
            </div>
            <div className="flex flex-col top-60 items-center fixed z-10 ">
              <Nav />
              <Sidebar />
            </div>

            <div className="p-24 w-2/3 flex flex-col items-center relative left-1/3">
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
