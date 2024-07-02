import React from "react";

interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  return (
    <div className="min-h-screen ">
      <span className="text-2xl font-bold py-8">{title}</span>
      <div className="my-4"> {children}</div>
    </div>
  );
};
