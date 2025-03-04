import Image from "next/image";
import React from "react";
import computer from "../../assets/computer.jpg";

interface Props {
  description: string;
}
//max-xl:bg-red-700
export const About = ({ description }: Props) => {
  const description_split = description.split(/\*/);
  return (
    <>
      <div className="flex max-md:flex-col flex-row-reverse relative w-full">
        <Image
          alt="User_photo"
          className="rounded-full border-2 m-2 w-[20rem] h-[20rem] top-250 "
          src={computer}
        />
        <div className="flex flex-col justify-start w-full ">
          {description_split.map((e: string) => {
            return (
              <p key={e} className={` text-base justify-start pb-8`}>
                {e}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};
