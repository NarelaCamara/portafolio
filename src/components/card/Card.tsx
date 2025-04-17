"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Chip } from "../chip/Chip";
import { FaGithub, FaGlobe } from "react-icons/fa6";

interface Props {
  links?: { web: string; git: string };
  subTitle?: string;
  image?: any;
  title: string;
  description: string;
  tecnologies: Array<string>;
}

export const Card = ({
  links,
  image,
  title,
  subTitle,
  description,
  tecnologies,
}: Props) => {
  const [showAll, setshowAll] = useState(false);
  const onClickShowMore = () => {
    setshowAll(!showAll);
  };

  return (
    <div className="my-4 bg-slate-950">
      <section
        className="m-2 flex flex-col justify-start"
        onClick={(e) => onClickShowMore()}
      >
        {subTitle && (
          <span className="text-lg font-bold relative top-4">{subTitle}</span>
        )}
        <div className=" my-4 font-bold ">
          <span className="text-xl">{title}</span>{" "}
        </div>

        <div>
          {links && (
            <div className="inline-flex rounded-md shadow-xs mx-2" role="group">
              <button
                type="button"
                onClick={() => {
                  window.open(links.git, "_blank");
                }}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <FaGithub size="3rem" className="w-3 h-3 me-2" />
                Git hub
              </button>

              <button
                type="button"
                onClick={() => {
                  window.open(links.web, "_blank");
                }}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <FaGlobe size="2rem" className="w-3 h-3 me-2" />
                Web
              </button>
            </div>
          )}
        </div>
        <div>
          <p className={`my-3  text-base justify-start`}>{description}</p>

          <div className=" py-4 w-full ">
            <div className="flex flex-row flex-wrap">
              {tecnologies && tecnologies.map((e) => <Chip key={e} text={e} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
