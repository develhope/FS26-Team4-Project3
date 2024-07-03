import { Link } from "react-router-dom";
import arrow from "../../assets/navbar/arrow.png";
import new_message from "../../assets/navbar/new_message.png";

export default function MessagesHeaderNavbar() {
  return (
    <div className="bg-blue t-0 max-h-12 w-full px-7 flex flex-row justify-between items-center">
      <button>
        <img src={arrow} alt="go back" height={32} width={32} />
      </button>
      <Link to="/chat">
        <button>
          <img src={new_message} alt="new message" height={32} width={32} />
        </button>
      </Link>
    </div>
  );
}
