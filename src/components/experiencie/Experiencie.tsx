import React from "react";
import { Card } from "../card/Card";

interface Props {}

export const Experiencie = (props: Props) => {
  return (
    <div>
      <p className={`text-base justify-start py-4`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        laudantium earum quae blanditiis rem esse amet, optio, nesciunt autem,
        debitis inventore provident placeat minima Lorem ipsum, dolor sit amet
        provident placeat minima.
      </p>

      <Card
        title="Semi Senior Frontend developer, Accenture"
        subTitle=" 2024 - Present"
      />

      <Card
        title="Semi Senior Frontend developer, Accenture"
        subTitle=" 2024 - Present"
      />
    </div>
  );
};
