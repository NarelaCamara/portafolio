import React from "react";

interface Props {
  text: string;
}

export const Chip = ({ text }: Props) => {
  return (
    <span className="m-1 bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
      {text}
    </span>
  );
};
