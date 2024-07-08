import { Link } from "react-router-dom";
import { useAnimal } from "../../assets/custom-hooks/AnimalContext";
import cat from "../../assets/user_avatars/cat.png";
import dog from "../../assets/user_avatars/dog.png";
import fish from "../../assets/user_avatars/fish.png";
import new_user from "../../assets/user_avatars/new_user.png";

interface Animal {
  id: number;
  name: string;
  type: "Cane" | "Gatto" | "Altro";
  breed: string;
}

const PetSelect: React.FC = () => {
  const { animals } = useAnimal();
  const registeredAnimals = animals.slice(0, 3); // Limita fino a 3 animali

  return (
    <div className="splashSection justify-center">
      <h1 className="font-sans text-center text-3xl">Accedi</h1>
      <div className="flex flex-wrap justify-center mx-2">
        {registeredAnimals.map((animal) => (
          <Link key={animal.id} to={`/profile/${animal.id}`}>
            <div className="flex flex-col items-center mx-2 my-2">
              <img
                src={getAnimalImage(animal.type)}
                alt="animal-user"
                className="w-32"
              />
              <p className="text-center font-bold">{animal.name}</p>
            </div>
          </Link>
        ))}
        {registeredAnimals.length < 3 && (
          <Link to="/registerpet">
            <div className="flex flex-col items-center mx-2 my-2">
              <img src={new_user} alt="new-user" className="w-32" />
            </div>
          </Link>
        )}
      </div>
      <div className="my-1">
        <p className="font-sans text-center mb-4">Oppure</p>
        <Link to="/feed">
          <button className="text-center bg-purple w-64 h-12 rounded-sm font-sans">
            ACCEDI COME OSPITE
          </button>
        </Link>
      </div>
    </div>
  );
};

function getAnimalImage(type: "Cane" | "Gatto" | "Altro") {
  switch (type) {
    case "Cane":
      return dog;
    case "Gatto":
      return cat;
    case "Altro":
      return fish;
    default:
      return new_user;
  }
}

export default PetSelect;
