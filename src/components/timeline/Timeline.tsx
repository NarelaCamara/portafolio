import React from "react";
import { Card } from "../card/Card";
import { Chip } from "../chip/Chip";

interface Props {}

export const Timeline = (props: Props) => {
  return (
    <section className="p-10 relative flex flex-col  bg-black overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[11.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[11.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <div className="">
          <Chip text="2024 - Present" />
        </div>
        <div className="relative -top-12 w-2/3 pl-2">
          <Card title="Semi Senior Frontend developer - Accenture" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[11.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[11.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <Chip text="2024 - Present asddasdasdasdasdasd" />

        <div className="relative -top-12 w-2/3 pl-2">
          <Card title="Semi Senior Frontend developer - Accenture" />
        </div>
      </div>
    </section>
  );
};
