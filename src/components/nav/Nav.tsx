import React from "react";

interface Props {}

export const Nav = (props: Props) => {
  return (
    <div className="flex flex-col items-center w-1/3">
      <span className="text-5xl mb-4">Roxana Narela Camara</span>
      <span className="text-3xl mb-4">Semi Senior Frontend developer</span>
      <span className="text-xl mb-4"> Next | Node | React Native</span>
    </div>
  );
};
