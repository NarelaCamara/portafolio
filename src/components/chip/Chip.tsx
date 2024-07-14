import React from "react";

interface Props {
  text: string;
}

export const Chip = ({ text }: Props) => {
  return (
    <p className="inline-flex items-center justify-center min-w-20 p-2 min-h-6 m-1 uppercase text-xs font-semibold  rounded-full translate-y-0.5">
      {text}
    </p>
  );
};
