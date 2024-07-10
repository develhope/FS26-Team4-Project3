import { Link } from "react-router-dom";
import new_user from "../../assets/user_avatars/new_user.png";

export default function SwitchProfile() {
  return (
    <div className="splashSection justify-center">
      <h2 className="text-center text-2xl">Come vuoi navigare PetVerse?</h2>
      <p className="text-center text-2xl -mt-3">Registra il tuo primo pet!</p>
      <div className="flex mx-2">
        <Link to="/registerpet">
          <button>
            <img src={new_user} alt="new-user" className="w-32" />
          </button>
        </Link>
      </div>
      <div className="my-3">
        <p className="font-sans underline text-center mb-0.5">
          Non possiedi un animale?
        </p>
        <Link to="/feed">
          <button className="text-center bg-purple w-64 h-12 rounded-lg font-sans">
            CONTINUA SENZA PET
          </button>
        </Link>
      </div>
    </div>
  );
}
