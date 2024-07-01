import React from "react";

interface Props {
  text: string;
}

export const Chip = ({ text }: Props) => {
  return (
    <div className="m-2 center relative inline-block select-none whitespace-nowrap rounded-full  px-3.5 py-1.5 align-baseline text-xs uppercase leading-none text-white outline ">
      <div className="mt-px">
        <p className="block text-sm font-medium capitalize leading-none text-white antialiased">
          {text}
        </p>
      </div>
    </div>
  );
};
