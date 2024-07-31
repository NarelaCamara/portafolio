import Image from "next/image";
import React from "react";
import computer from "../../assets/computer.jpg";

interface Props {}
//max-xl:bg-red-700
export const About = (props: Props) => {
  return (
    <>
      <div className="flex max-md:flex-col flex-row-reverse relative w-full">
        <Image
          alt="User_photo"
          className="rounded-full border-2 m-2 w-[20rem] h-[20rem] top-250 "
          src={computer}
        />
        <div className="flex flex-col justify-start w-full ">
          <p className={` text-base justify-start pb-8`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            laudantium earum quae blanditiis rem esse amet, optio, nesciunt
            autem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            incidunt laborum animi repellendus natus magnam praesentium impedit
            magni consequuntur! Ipsum atque et voluptas doloremque, quas est ab
            maxime distinctio magni?
          </p>
          <p className={` text-base justify-start pb-8`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            laudantium earum quae blanditiis rem esse amet, optio, nesciunt
            autem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            incidunt laborum animi repellendus natus magnam praesentium impedit
            magni consequuntur! Ipsum atque et voluptas doloremque, quas est ab
            maxime distinctio magni?
          </p>
          <p className={` text-base justify-start pb-8`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            laudantium earum quae blanditiis rem esse amet, optio, nesciunt ,
            quas est ab maxime distinctio magni?
          </p>
        </div>
      </div>
    </>
  );
};
