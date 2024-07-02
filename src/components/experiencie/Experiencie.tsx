import React from "react";
import { Card } from "../card/Card";
import { Timeline } from "../timeline/Timeline";

interface Props {}

export const Experiencie = (props: Props) => {
  return (
    <>
      <p className={`text-base px-16 justify-start p-4`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        laudantium earum quae blanditiis rem esse amet, optio, nesciunt autem,
        debitis inventore provident placeat minima Lorem ipsum, dolor sit amet
        provident placeat minima.
      </p>
      <Timeline />
    </>
  );
};
