import { Link } from "react-router-dom";
import arrow from "../../assets/navbar/arrow.png";
import dog from "../../assets/user_avatars/dog.png";

export default function ChatHeaderNavbar() {
  return (
    <div className="bg-blue t-0 max-h-12 w-full px-7 py-1 flex flex-row items-center">
      <Link to="/messagecenter">
        <button>
          <img
            src={arrow}
            alt="go back"
            height={58}
            width={58}
            className="pr-7"
          />
        </button>
      </Link>

      <button>
        <img
          src={dog}
          alt="go to user profile"
          height={92}
          width={92}
          className="pr-2"
        />
      </button>
      <button>
        <h3 className="pr-7 text-white font-bold">Utente 1</h3>
      </button>
    </div>
  );
}
