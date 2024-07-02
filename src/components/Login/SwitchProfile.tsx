import { Link } from "react-router-dom";
import cat from "../../assets/user_avatars/cat.png";
import dog from "../../assets/user_avatars/dog.png";
import fish from "../../assets/user_avatars/fish.png";
import new_user from "../../assets/user_avatars/new_user.png";

export default function SwitchProfile() {
  return (
    <>
      <div className="splashSection justify-center">
        <h2 className="font-sans text-center text-3xl">
          Come vuoi navigare PetVerse?
        </h2>
        <p className="font-sans text-center">
            Registra il tuo primo pet!
          </p>
        <div className="flex mx-2">
          <button>
            <img src={cat} alt="cat-user" />
          </button>
          <button>
            <img src={dog} alt="dog-user" />
          </button>
          <button>
            <img src={fish} alt="fish-user" />
          </button>
          <Link to="/registerpet">
            <button>
              <img src={new_user} alt="new-user" />
            </button>
          </Link>
        </div>
        <div className="my-3">
          <p className="font-sans underline text-center">
            Non possiedi un animale?
          </p>
          <Link to="/feed">
            <button className="text-center bg-purple w-64  h-12 rounded-sm font-sans">
            CONTINUA SENZA PET
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
