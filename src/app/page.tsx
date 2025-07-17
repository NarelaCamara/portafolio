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
import LandingPage from "@/ui/section/section";

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
        <link
          rel="icon"
          href="/nrc-logo.svg"
          type="image/svg+xml"
          sizes="32x32"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className="bg-slate-900 m-16">
        <main>
          <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 min-w-[300px]">
            <div className="lg:row-span-2 lg:sticky lg:top-8 lg:self-start">
              <LandingPage>
                <Sidebar items={ITEMS} />
              </LandingPage>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 m-8 lg:space-y-12 max-w-[1000px]">
              {ITEMS.map((e) => (
                <Section {...e} key={e.title} />
              ))}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
