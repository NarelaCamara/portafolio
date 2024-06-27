import Image from "next/image";
import React from "react";
import computer from "../../assets/computer.jpg";

interface Props {}

export const About = (props: Props) => {
  return (
    <div>
      <span className="text-2xl font-bold my-4">Acerca de mi</span>
      <p className="justify-start my-4 text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        mollitia maiores laudantium earum quae blanditiis rem esse amet, optio,
        nesciunt autem, debitis inventore provident placeat minima. Voluptas,
        in. Ducimus, ad?
      </p>

      <p className="justify-start my-4 text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        mollitia maiores laudantium earum quae blanditiis rem esse amet, optio,
        nesciunt autem, debitis inventore provident placeat minima. Voluptas,
        in. Ducimus, ad?
      </p>

      <p className="justify-start my-4 text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        mollitia maiores laudantium earum quae blanditiis rem esse amet, optio,
        nesciunt autem, debitis inventore provident placeat minima. Voluptas,
        in. Ducimus, ad? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Quisquam mollitia maiores laudantium earum quae blanditiis rem
        esse amet, optio, nesciunt autem, debitis inventore provident placeat
        minima. Voluptas, in. Ducimus, ad? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Quisquam mollitia maiores laudantium earum
        quae blanditiis rem esse amet, optio, nesciunt autem, debitis inventore
        provident placeat minima. Voluptas, in. Ducimus, ad?
      </p>

      <Image
        alt="User_photo"
        className="rounded-full w-60 h-60"
        src={computer}
      />
    </div>
  );
};
