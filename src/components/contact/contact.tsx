export const Contact = () => {
  return (
    <div className="flex flex-col justify-center gap-16 m-24">
      <input
        placeholder="Asunto"
        type="text"
        name="asunto"
        id="asunto"
        className="border-white bg-gray-800 rounded-3xl  px-4 py-2  text-white"
      />
      <input
        placeholder="Email"
        type="email"
        name=""
        id="email"
        className="border-white bg-gray-800  rounded-3xl  px-4 py-2  text-white"
      />
      <textarea
        placeholder="descripción"
        name="descripcion"
        maxLength={1024}
        id="descripcion"
        className="border-white bg-gray-800  rounded-3xl  px-4 py-2  text-white custom-resize-handle custom-scrollbar"
        rows={4}
      />
    </div>
  );
};
