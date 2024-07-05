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
import { useScroll, motion } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
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
      title: "Experiencia y conocimientos",
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
      </head>
      <body>
        <main className="min-h-screen flex flex-row relative">
          <div className="fixed w-screen p-0 m-0 top-0">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="p-2 bg-gray-200 w-full opacity-15"
            />
          </div>
          <div className="flex flex-col top-60 items-center fixed z-10 py-10 p-6">
            <Nav />
            <Sidebar />
          </div>

          <div className="px-16 w-2/3 flex flex-col items-center relative left-1/3">
            {ITEMS.map((e) => (
              <Section {...e} key={e.title} />
            ))}
            <Circle />
          </div>
        </main>
      </body>
    </html>
  );
}
