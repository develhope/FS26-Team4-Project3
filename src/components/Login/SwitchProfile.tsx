import { Link } from "react-router-dom";
import cat from "../../assets/user_avatars/cat.png";
import dog from "../../assets/user_avatars/dog.png";
import fish from "../../assets/user_avatars/fish.png";
import new_user from "../../assets/user_avatars/new_user.png";
import { useAnimal } from "../../assets/custom-hooks/AnimalContext";

export default function SwitchProfile() {
  const { animal } = useAnimal();
  const isRegistered = !!animal;

  let animalImage;
  switch (animal?.type) {
    case "Cane":
      animalImage = dog;
      break;
    case "Gatto":
      animalImage = cat;
      break;
    case "Altro":
      animalImage = fish;
      break;
    default:
      animalImage = new_user;
      break;
  }

  return (
    <div className="splashSection justify-center">
      <h2 className="font-sans text-center text-3xl">
        Come vuoi navigare PetVerse?
      </h2>
      <p className="font-sans text-center">Registra il tuo primo pet!</p>
      <div className="flex mx-2">
        {isRegistered ? (
          <button>
            <img src={animalImage} alt="animal-user" className="w-32" />
            <p className="text-center">{animal?.name}</p>
          </button>
        ) : (
          <Link to="/registerpet">
            <button>
              <img src={new_user} alt="new-user" className="w-32" />
            </button>
          </Link>
        )}
      </div>
      <div className="my-3">
        <p className="font-sans underline text-center">
          Non possiedi un animale?
        </p>
        <Link to="/feed">
          <button className="text-center bg-purple w-64 h-12 rounded-sm font-sans">
            CONTINUA SENZA PET
          </button>
        </Link>
      </div>
    </div>
  );
}
