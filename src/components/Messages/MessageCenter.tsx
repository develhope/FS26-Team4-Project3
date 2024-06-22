import search from "../../assets/navbar/search.png";
import dog from "../../assets/user_avatars/dog.png";
import cat from "../../assets/user_avatars/cat.png";
import fish from "../../assets/user_avatars/fish.png";
import "././message.css";

export function MessageCenter() {
  return (
    <div>
      <div className="searching">
        <img src={search} alt="search user" />
        <input type="text" placeholder="Cerca utente" />
      </div>
      <div>
        <h1>Messaggi</h1>
        <ul>
          <li>
            <img src={dog} alt="" />
            <p>Utente 1</p>
            <p className="bg-red">Anteprima Messaggio</p>
          </li>
          <li>
            <img src={cat} alt="" />
            <p>Utente 1</p>
            <p>Anteprima Messaggio</p>
          </li>
          <li>
            <img src={fish} alt="" />
            <p>Utente 1</p>
            <p>Anteprima Messaggio</p>
          </li>
          <li>
            <img src={dog} alt="" />
            <p>Utente 1</p>
            <p>Anteprima Messaggio</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MessageCenter;
