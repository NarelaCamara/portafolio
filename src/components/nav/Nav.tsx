import nare from "../../assets/nare.jpeg";

export const Nav = () => {
  return (
    <div className={`flex flex-col items-center justify-center  `}>
      <img
        alt="User_photo"
        className="rounded-full border-2  border-[#6C7289] h-[256px] w-[256px]"
        src={nare}
      />
      <h1
        className={`text-[#FFFF] text-center  text-4xl font-extrabold mb-4 font-[Fraunces] my-2`}
      >
        Narela Camara
      </h1>
      <h1
        className={`text-[#FFFF] text-center  text-xl   mb-4 font-[Montserrat] tracking-[0.5rem]`}
      >
        Frontend developer
      </h1>
      <h1
        className={`  mb-4 font-[Montserrat] text-[#6C7289] text-center     text-xs tracking-[0.5rem]`}
      >
        Next | React | Node
      </h1>
    </div>
  );
};
