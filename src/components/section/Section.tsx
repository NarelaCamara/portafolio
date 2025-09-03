/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  children: any;
  title: string;
}

export const Section = ({ title, children }: Props) => {
  return (
    <div className="min-h-screen   relative top-[15%] pt-[15%]">
      <section id={title} className={`m-8`}>
        <h2 className="text-[#FFFF] my-4 font-bold font-[Fraunces] text-2xl text-center">
          {title}
        </h2>
        <div className="my-2">{children}</div>
      </section>
    </div>
  );
};
