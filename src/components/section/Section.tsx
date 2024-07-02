import React from "react";

interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col flex-nowrap justify-center items-start w-4/5 pb-16">
      <span className="text-3xl font-bold py-8">{title}</span>
      <div className="my-4"> {children}</div>
    </div>
  );
};
