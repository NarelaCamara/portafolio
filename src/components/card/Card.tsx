import { useState } from "react";
import { Chip } from "../chip/Chip";
import { FaGithub, FaGlobe } from "react-icons/fa6";

interface Props {
  links?: { web: string; git: string };
  subTitle?: string;
  title: string;
  description: string;
  tecnologies: Array<string>;
}

export const Card = ({
  links,

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
    <div className="my-4">
      <section
        className="m-2 flex flex-col justify-center align-middle"
        onClick={() => onClickShowMore()}
      >
        {subTitle && (
          <span className=" text-[#FFFF] text-lg font-bold top-4 text-center">
            {subTitle}
          </span>
        )}
        <span className="text-[#FFFF] my-4 font-bold text-xl text-center flex flex-row justify-center  align-middle font-[Montserrat]">
          {title}
        </span>
        {links && (
          <div
            className="rounded-md shadow-xs mx-2 flex flex-row justify-center  align-middle"
            role="group"
          >
            <button
              type="button"
              onClick={() => {
                window.open(links.git, "_blank");
              }}
              className="font-[Montserrat] inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700  focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <FaGithub size="3rem" className="w-3 h-3 me-2" />
              Git hub
            </button>

            <button
              type="button"
              onClick={() => {
                window.open(links.web, "_blank");
              }}
              className="font-[Montserrat] inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700  focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <FaGlobe size="2rem" className="w-3 h-3 me-2" />
              Web
            </button>
          </div>
        )}
        <p
          className={`my-3 text-[#6C7289] text-sm text-center justify-start font-[Montserrat]`}
        >
          {description}
        </p>
        <div className="flex flex-row flex-wrap  justify-center  align-middle font-[Montserrat] py-4 ">
          {tecnologies && tecnologies.map((e) => <Chip key={e} text={e} />)}
        </div>
      </section>
    </div>
  );
};
