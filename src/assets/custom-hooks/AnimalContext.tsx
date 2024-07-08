import { createContext, useContext, useState, ReactNode } from "react";

export interface Animal {
  id: number;
  name: string;
  type: string;
  breed: string;
  gender: string;
  age: string;
}

interface AnimalContextType {
  animals: Animal[];
  addAnimal: (animal: Animal) => void;
}

const AnimalContext = createContext<AnimalContextType>({
  animals: [],
  addAnimal: () => {},
});

export const useAnimal = () => useContext(AnimalContext);

interface AnimalProviderProps {
  children: ReactNode;
}

export const AnimalProvider: React.FC<AnimalProviderProps> = ({ children }) => {
  const [animals, setAnimals] = useState<Animal[]>(() => {
    const storedAnimals = localStorage.getItem("animals");
    return storedAnimals ? JSON.parse(storedAnimals) : [];
  });

  const addAnimal = (animal: Animal) => {
    setAnimals((prevAnimals) => {
      const updatedAnimals = [...prevAnimals, animal];
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));
      return updatedAnimals;
    });
  };

  return (
    <AnimalContext.Provider value={{ animals, addAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
