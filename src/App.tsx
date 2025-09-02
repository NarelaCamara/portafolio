import "./App.css";
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
    <div className="bg-slate-900 flex flex-nowrap flex-col items-center">
      <div className="h-screen  min-w-[300px] max-w-[960px] ">
        <Sidebar items={ITEMS} />
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
