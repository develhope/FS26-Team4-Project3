import search from "../../assets/navbar/search.png";
import add from "../../assets/navbar/add.png";
import original_logo from "../../assets/logo/original_logo.png";
import message from "../../assets/navbar/message.png";
import cat from "../../assets/user_avatars/cat.png";
import { Link } from "react-router-dom";

export default function FooterNavbar() {
  return (
    <div className="bg-blue max-h-12 w-full px-7 flex flex-row justify-between items-center z-50">
      <button>
        <img src={search} alt="search content" height={30} width={30} />
      </button>
      <button>
        <img src={add} alt="add post" height={36} width={36} />
      </button>
      <Link to="/feed">
        <button>
          <img src={original_logo} alt="reload feed" height={48} width={48} />
        </button>
      </Link>
      <Link to="/messagecenter">
        <button>
          <img
            src={message}
            alt="open messages center"
            height={34}
            width={34}
          />
        </button>
      </Link>
      <Link to="/profilepage">
        <button>
          <img src={cat} alt="go to profile page" height={52} width={52} />
        </button>
      </Link>
    </div>
  );
}
