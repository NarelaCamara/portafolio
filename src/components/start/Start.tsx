import React from "react";
import { FlipText } from "../FlipText/FlipText";

type Props = {};

export default function Start({}: Props) {
  const ITEMS = ["dasds", "asdasdd", "adfasdsd"];
  return (
    <div>
      {" "}
      {
        <section className="w-auto bg-white px-8 py-24 text-black">
          {ITEMS.map((e) => (
            <FlipText href="#" key={e + 1}>
              {e}
            </FlipText>
          ))}
        </section>
      }
    </div>
  );
}
