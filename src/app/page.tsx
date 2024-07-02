/* eslint-disable @next/next/no-sync-scripts */
import { About, Contact, Nav, Portfolio, Section, Sidebar } from "@/components";
import { Experiencie } from "@/components/experiencie/Experiencie";

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
        <main className="min-h-screen p-12 flex flex-row relative">
          <div className="flex flex-col top-60 items-center fixed z-10">
            <Nav />
            <Sidebar />
          </div>
          <div className="px-16 w-2/3 flex flex-col items-center relative left-1/3">
            {ITEMS.map((e) => (
              <Section {...e} key={e.title} />
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
