"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

interface YourDataType {
  sectionActive: string;
  updateSectionActive: (e: string) => void;
}

interface SessionContextProviderProps {
  children: ReactNode;
}

// Crear el contexto
const SessionContext = createContext<YourDataType>({
  sectionActive: "",
  updateSectionActive: () => {},
});

// Proveedor del contexto
export const SessionContextProvider: React.FC<SessionContextProviderProps> = ({
  children,
}) => {
  const [sectionActive, setSectionActive] = useState<string>("Acerca de mi");

  // Función para actualizar el dato
  const updateSectionActive = (newData: string) => {
    setSectionActive(newData);
  };

  return (
    <SessionContext.Provider
      value={{
        sectionActive,
        updateSectionActive,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error(
      "useYourContext debe ser usado dentro de un proveedor YourContext"
    );
  }
  return context;
};
