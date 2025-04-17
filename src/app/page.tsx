"use client";
/* eslint-disable @next/next/no-sync-scripts */
import {
  About,
  Education,
  Experiencie,
  Portfolio,
  Section,
  Sidebar,
} from "@/components";

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
      <body className="bg-slate-950">
        <main className="bg-slate-950 flex lg:flex-row flex-col align-middle ">
          <Sidebar items={ITEMS} />
          <div className="bg-slate-950 lg:w-2/4 lg:left-1/3">
            {ITEMS.map((e) => (
              <Section {...e} key={e.title} />
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
