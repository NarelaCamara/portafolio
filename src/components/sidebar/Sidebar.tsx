import { SidebarItem } from "../sidebarItem/SidebarItem";
import { Nav } from "../nav/Nav";

interface Props {
  items: Array<{ title: string }>;
}

export const Sidebar = ({ items }: Props) => {
  return (
    <div className="relative top-[15%]">
      <Nav />
      <div className="fixed bottom-0 flex flex-row items-center justify-center py-2 bg-[#0f172b] z-30">
        {items.map((e) => (
          <SidebarItem key={e.title} title={e.title} />
        ))}
      </div>
    </div>
  );
};
