import React from "react";

interface Props {
  description: string;
}
//max-xl:bg-red-700
export const About = ({ description }: Props) => {
  const description_split = description.split(/\*/);
  return (
    <>
      <div className="flex max-md:flex-col flex-row-reverse relative w-full custom: ">
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
