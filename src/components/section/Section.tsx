import React from "react";

interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  return (
    <div className="p-12">
      <span className="text-2xl font-bold my-8">{title}</span>
      {children}
    </div>
  );
};
