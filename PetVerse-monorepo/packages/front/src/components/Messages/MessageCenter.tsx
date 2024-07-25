import search from "../../assets/navbar/search.png";
import dog from "../../assets/user_avatars/dog.png";
import cat from "../../assets/user_avatars/cat.png";
import fish from "../../assets/user_avatars/fish.png";
import "././message.css";
import MessagesHeaderNavbar from "../Navbars/MessagesHeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";
import { Link } from "react-router-dom";

export function MessageCenter() {
  return (
    <div>
      <MessagesHeaderNavbar />
      <div className="min-h-screen bg-blue flex flex-col mt-3 items-center">
        <div className="Searching rounded-lg flex w-96 h-12">
          <img src={search} alt="search user" />
          <input type="text" placeholder="Cerca utente" />
        </div>
        <div className="Message-center">
          <h1>Messaggi</h1>
          <ul>
            <li className="Pop-mess rounded-lg">
              <Link to="/friendchat" className="flex items-center">
                <img src={dog} alt="" />
                <div>
                  <h3>User 1</h3>
                  <p>Anteprima Messaggio</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <FooterNavbar />
    </div>
  );
}
export default MessageCenter;
