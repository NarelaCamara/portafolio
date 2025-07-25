import gsap from "gsap";
import {
  About,
  Education,
  Experiencie,
  Portfolio,
  Section,
  Sidebar,
} from "./components";

function App() {
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

  gsap.from(".hero", { opacity: 1, y: 0, duration: 1 });

  return (
    <div className="bg-slate-900 hero">
      <main className="hero">
        <div className="bg-black p-4 hidden">
          <div className="font-[Fraunces] text-9xl  p-4 m-16 text-black font-medium bg-white  border-2 border-white w-fit">
            NC
          </div>
        </div>
        <div className=" lg:grid lg:grid-cols-3 lg:grid-rows-2 min-w-[300px]">
          <div className="lg:row-span-2 lg:sticky lg:self-center">
            <Sidebar items={ITEMS} />
          </div>

          <div className="lg:col-span-2 lg:row-span-2 m-8 lg:space-y-12 max-w-[1000px] lg:h-screen ">
            {ITEMS.map((e) => (
              <Section {...e} key={e.title} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
