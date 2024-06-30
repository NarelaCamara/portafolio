/* eslint-disable @next/next/no-sync-scripts */
import { About, Nav, Portfolio, Sidebar } from "@/components";

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
        <main className="min-h-screen p-12 flex flex-row relative">
          <div className="flex flex-col my-32 items-center fixed z-10">
            <Nav />
            <Sidebar />
          </div>
          <div className="px-16 w-2/3 flex items-center relative left-1/3">
            {false && <About />}

            <Portfolio />
          </div>
        </main>
      </body>
    </html>
  );
}
