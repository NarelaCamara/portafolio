import React from "react";
interface Props {
  text: string;
  icon: any;
}

export const SidebarItem = ({ text, icon }: Props) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="flex items-stretch w-full p-3 rounded-lg text-start text-lg leading-tight transition-all hover:-translate-y-2 hover:text-blue-400 "
    >
      {text}
    </div>
  );
};
