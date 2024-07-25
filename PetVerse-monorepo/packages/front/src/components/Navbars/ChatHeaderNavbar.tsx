import { Link } from "react-router-dom";
import arrow from "../../assets/navbar/arrow.png";
import dog from "../../assets/user_avatars/dog.png";

export default function ChatHeaderNavbar() {
  return (
    <>
      <div className="bg-blue h-14 w-full px-3 py-1 flex flex-row items-center">
        <Link to="/messagecenter">
          <button>
            <img
              src={arrow}
              alt="go back"
              height={50}
              width={50}
              className="pt-2"
            />
          </button>
        </Link>

        <button>
          <img src={dog} alt="go to user profile" height={70} width={70} />
        </button>
        <button>
          <h3 className="pr-7 text-white font-bold">Rex</h3>
        </button>
      </div>
      <div className="h-1 bg-gradient-to-r from-navbar-line-start via-navbar-line-middle to-navbar-line-end"></div>
    </>
  );
}
