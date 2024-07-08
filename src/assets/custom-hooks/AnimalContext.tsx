import { createContext, useContext, useState, ReactNode } from "react";

interface Animal {
  id: number;
  name: string;
  type: "Cane" | "Gatto" | "Altro";
  breed: string;
}

interface AnimalContextType {
  animals: Animal[];
  addAnimal: (animal: Animal) => void;
}

const AnimalContext = createContext<AnimalContextType>({
  animals: [],
  addAnimal: (animal: Animal) => {},
});

export const useAnimal = () => useContext(AnimalContext);

interface AnimalProviderProps {
  children: ReactNode;
}

export const AnimalProvider: React.FC<AnimalProviderProps> = ({ children }) => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  const addAnimal = (animal: Animal) => {
    setAnimals((prevAnimals) => [...prevAnimals, animal]);
  };

  return (
    <AnimalContext.Provider value={{ animals, addAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
