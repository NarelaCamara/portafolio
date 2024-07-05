import Image from "next/image";
import React from "react";
import computer from "../../assets/computer.jpg";
import { motion, useDragControls } from "framer-motion";

interface Props {}

export const About = (props: Props) => {
  const controls = useDragControls();
  return (
    <>
      <motion.p className="justify-start text-base py-8">
        <Image
          alt="User_photo"
          className="rounded-full border-8 m-2 p-4 w-[20rem] h-[20rem] float-right  "
          src={computer}
        />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        mollitia maiores laudantium earum quae blanditiis rem esse amet, optio,
        nesciunt autem, debitis inventore provident placeat minima. Voluptas,
        in. Ducimus, ad? Lorem ipsum, dolor sit amet consectetur adipisicing
      </motion.p>

      <motion.p className="justify-start text-5xl py-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
      </motion.p>

      <motion.p className="justify-start text-lg py-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        mollitia maiores laudantium earum quae blanditiis rem esse amet, optio,
        nesciunt autem, debitis inventore provident placeat minima. Voluptas,
        in. Ducimus, ad? Lorem ipsum, dolor sit amet consectetur adipisicing
      </motion.p>
      <motion.p className="justify-start text-base py-8">
        <Image
          alt="User_photo"
          className="w-[20rem] h-[12rem] float-left mx-8  border-2 p-4"
          src={computer}
        />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        mollitia maiores laudantium earum quae blanditiis rem esse amet, optio,
        nesciunt autem, debitis inventore provident placeat minima. Voluptas,
        in. Ducimus, ad? Lorem ipsum, dolor sit amet consectetur adipisicing
      </motion.p>
    </>
  );
};
