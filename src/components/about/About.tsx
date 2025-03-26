import Image from "next/image";
import React from "react";

interface Props {
  description: string;
}
//max-xl:bg-red-700
export const About = ({ description }: Props) => {
  const computer = '/computer.jpg';
  const description_split = description.split(/\*/);
  return (
    <>
      <div className="flex max-md:flex-col flex-row-reverse relative w-full custom: ">
        <Image
          alt="User_photo"
          className="rounded-full border-2 m-2 w-[20rem] h-[20rem] top-250 "
          src={computer}
          width={300}
          height={300}
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
