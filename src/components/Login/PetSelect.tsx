import { Link } from "react-router-dom";
import { useAnimal } from "../../assets/custom-hooks/AnimalContext";
import cat from "../../assets/user_avatars/cat.png";
import dog from "../../assets/user_avatars/dog.png";
import fish from "../../assets/user_avatars/fish.png";
import new_user from "../../assets/user_avatars/new_user.png";

const PetSelect: React.FC = () => {
  const { animals } = useAnimal();

  const seenIds = new Set<number>();
  const registeredAnimals = animals
    .filter((animal) => {
      if (seenIds.has(animal.id)) {
        return false;
      }
      seenIds.add(animal.id);
      return true;
    })
    .slice(0, 3);

  return (
    <div className="splashSection flex justify-center">
      <h1 className="text-center text-3xl">Accedi</h1>
      <div className="flex flex-wrap justify-center mx-2">
        {registeredAnimals.map((animal) => (
          <Link to={`/feed`}>
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
              <p className="text-center">Nuovo Animale</p>
            </div>
          </Link>
        )}
      </div>
      <div className="my-1 flex  flex-col justify-center">
        <p className="text-center mb-2">Oppure</p>
        <Link to="/feed">
          <button className=" bg-purple w-56 h-12 rounded-lg font-semibold mt-2">
            CONTINUA COME OSPITE
          </button>
        </Link>
      </div>
    </div>
  );
};

function getAnimalImage(type: string) {
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
