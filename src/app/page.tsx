import { About, Nav, Sidebar } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen p-12 flex flex-row">
      <div className="flex flex-col">
        <Nav />
        <Sidebar />
      </div>
      <div className=" w-2/3">
        <About />
      </div>
    </main>
  );
}
