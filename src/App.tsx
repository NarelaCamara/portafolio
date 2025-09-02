import "./App.css";
import {
  About,
  Education,
  Experiencie,
  Nav,
  Portfolio,
  Section,
  SidebarItem,
} from "./components";

function App() {
  const ITEMS = [
    {
      children: <About />,
      title: "Acerca de mi",
    },

    {
      children: <Experiencie />,
      title: "Experiencia",
    },
    {
      children: <Portfolio />,
      title: "Portfolio",
    },
    {
      children: <Education />,
      title: "Educación",
    },
  ];

  return (
    <div className="bg-slate-900 flex flex-nowrap flex-col items-center max-lg:h-[1024px]">
      <div className="h-screen max-lg:h-[1024px] min-w-[300px] max-w-[960px]">
        <div className="relative top-[15%] lg:fixed lg:left-[5vw] lg:top-[12%]">
          <Nav />
        </div>
      </div>

      <div className="fixed bottom-0 md:bottom-auto md:top-0   flex flex-row items-center lg:flex-col  lg:top-[62%] lg:left-[10%]  justify-center py-2 bg-[#0f172b] z-30">
        {ITEMS.map((e) => (
          <SidebarItem key={e.title} title={e.title} />
        ))}
      </div>
      <div className="min-w-[300px] max-w-[900px]">
        {ITEMS.map((e) => (
          <Section {...e} key={e.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
