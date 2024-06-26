import search from "../../assets/navbar/search.png";
import dog from "../../assets/user_avatars/dog.png";
import cat from "../../assets/user_avatars/cat.png";
import fish from "../../assets/user_avatars/fish.png";
import "././message.css";

export function MessageCenter() {
  return (
    <div>
      <div className="Searching rounded-lg">
        <img src={search} alt="search user" />
        <input type="text" placeholder="Cerca utente" />
      </div>
      <div className="Message-center">
        <h1>Messaggi</h1>
        <ul>
          <li className="Pop-mess rounded-lg">
            <img src={dog} alt="" />
            <div>
              <h3>Utente 1</h3>
              <p>Anteprima Messaggio</p>
            </div>
          </li>
          <li className="Pop-mess rounded-lg">
            <img src={cat} alt="" />
            <div>
              <h3>Utente 2</h3>
              <p>Anteprima Messaggio</p>
            </div>
          </li>
          <li className="Pop-mess rounded-lg">
            <img src={fish} alt="" />
            <div>
              <h3>Utente 3</h3>
              <p>Anteprima Messaggio</p>
            </div>
          </li>
          <li className="Pop-mess rounded-lg">
            <img src={dog} alt="" />
            <div>
              <h3>Utente 4</h3>
              <p>Anteprima Messaggio</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MessageCenter;
