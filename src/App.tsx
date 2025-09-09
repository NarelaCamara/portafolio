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
    <div className="bg-slate-900 min-w-[200px] max-w-[1280px] flex flex-col lg:flex-row items-center">
      {/* Vista mobile */}
      <div className="h-screen pt-[100px] max-lg:block hidden relative lg:h-fit">
        <Nav />
      </div>

      <div className="max-lg:block hidden fixed bottom-0 md:bottom-auto md:top-0 flex flex-row items-center justify-center py-2 bg-[#0f172b] z-30">
        {ITEMS.map((e) => (
          <SidebarItem key={e.title} title={e.title} />
        ))}
      </div>

      {/* Contenedor centrado con ancho máximo */}
      <div className="w-full max-w-[1204px] mx-auto flex flex-col lg:flex-row relative">
        {/* NAV + SIDEBAR en desktop */}
        <div className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-[30%] flex-col items-stretch justify-center space-y-6">
          {/* NAV */}
          <div className="p-4 bg-slate-900">
            <Nav />
          </div>
          {/* SIDEBAR */}
          <div className="flex flex-col items-center justify-center  bg-[#0f172b] z-30">
            {ITEMS.map((e) => (
              <SidebarItem key={e.title} title={e.title} />
            ))}
          </div>
        </div>

        {/* SECTIONS */}
        <div className="w-full lg:w-[70%] lg:ml-[30%] px-4 md:px-8">
          {ITEMS.map((e) => (
            <Section {...e} key={e.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
