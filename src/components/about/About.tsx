import Image from "next/image";
import React from "react";
import computer from "../../assets/computer.jpg";

interface Props {}

export const About = (props: Props) => {
  return (
    <>
      <Image
        alt="User_photo"
        className="rounded-full w-[20rem] h-[20rem] float-right m-8 "
        src={computer}
      />
      <p className="justify-start m-8 text-base ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        mollitia maiores laudantium earum quae blanditiis rem esse amet, optio,
        nesciunt autem, debitis inventore provident placeat minima. Voluptas,
        in. Ducimus, ad? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Quisquam mollitia maiores laudantium earum quae blanditiis rem
        esse amet, optio, nesciunt autem, debitis inventore provident placeat
        minima. Voluptas, in. Ducimus, ad? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Quisquam mollitia maiores laudantium earum
        quae blanditiis rem esse amet, optio, nesciunt autem, debitis inventore
        provident placeat minima. Voluptas, in. Ducimus, ad? Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Quisquam mollitia maiores
        laudantium earum quae blanditiis rem esse amet, optio, nesciunt autem,
        debitis inventore provident placeat minima. Voluptas, in. Ducimus, ad?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        mollitia maiores laudantium earum quae blanditiis rem esse amet, optio,
        nesciunt autem, debitis inventore provident placeat minima. Voluptas,
        in. Ducimus, ad? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Quisquam mollitia maiores laudantium earum quae blanditiis rem
        esse amet, optio, nesciunt autem, debitis inventore provident placeat
        minima. Voluptas, in. Ducimus, ad?
      </p>
    </>
  );
};
