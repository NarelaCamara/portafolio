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
    <div className="bg-slate-900 flex flex-nowrap flex-col lg:flex-row items-center">
      <div className="relative h-screen lg:h-fit lg:fixed top-[15vh] lg:left-[8vw]">
        <Nav />
      </div>

      <div className="fixed bottom-0 md:bottom-auto md:top-0 lg:left-[14vw]  flex flex-row items-center lg:flex-col  lg:top-[62%]  justify-center py-2 bg-[#0f172b] z-30 lg:z-0">
        {ITEMS.map((e) => (
          <SidebarItem key={e.title} title={e.title} />
        ))}
      </div>
      <div className="lg:min-w-[45vw] lg:max-w-[55vw] lg:relative lg:left-[30vw]">
        {ITEMS.map((e) => (
          <Section {...e} key={e.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
