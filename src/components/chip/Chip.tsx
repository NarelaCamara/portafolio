interface Props {
  text: string;
}

export const Chip = ({ text }: Props) => {
  return (
    <span className="m-1 text-gray-200 text-xs font-medium  px-2 py-1 rounded-full bg-gray-800">
      {text}
    </span>
  );
};
