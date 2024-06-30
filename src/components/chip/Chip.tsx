import React from "react";
import { FaCableCar } from "react-icons/fa6";

interface Props {
  text: string;
}

export const Chip = ({ text }: Props) => {
  return (
    <div className="m-2 center relative inline-block select-none whitespace-nowrap rounded-full bg-blue-500 px-3.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">
        <p className="block font-sans text-sm font-medium capitalize leading-none text-white antialiased">
          {text}
        </p>
      </div>
    </div>
  );
};
