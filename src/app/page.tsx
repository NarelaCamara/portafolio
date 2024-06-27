import { About, Nav, Sidebar } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen p-12 flex flex-row">
      <div className="flex flex-col my-32 items-center">
        <Nav />
        <Sidebar />
      </div>
      <div className="px-16 w-2/3 flex  items-center">
        <About />
      </div>
    </main>
  );
}
