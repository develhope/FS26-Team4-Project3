export interface Animal {
  id: number;
  name: string;
  type: string;
  breed: string;
  gender: string;
  age: string;
}

let initialAnimals: Animal[] = [];
const storedAnimals = localStorage.getItem("animals");
if (storedAnimals) {
  initialAnimals = JSON.parse(storedAnimals);
}

export const animals: Animal[] = initialAnimals;

export function addAnimal(newAnimal: Animal) {
  animals.push(newAnimal);
  localStorage.setItem("animals", JSON.stringify(animals));
}
