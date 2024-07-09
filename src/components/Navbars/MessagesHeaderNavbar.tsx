import { Link } from "react-router-dom";
import arrow from "../../assets/navbar/arrow.png";
import new_message from "../../assets/navbar/new_message.png";

export default function MessagesHeaderNavbar() {
  return (
    <>
      <div className="bg-blue h-14 w-full px-7 flex flex-row justify-between items-center">
        <button>
          <img src={arrow} alt="go back" height={50} width={50} />
        </button>
        <Link to="/chat">
          <button>
            <img src={new_message} alt="new message" height={32} width={32} />
          </button>
        </Link>
      </div>
      <div className="h-1 bg-gradient-to-r from-navbar-line-start via-navbar-line-middle to-navbar-line-end"></div>
    </>
  );
}
