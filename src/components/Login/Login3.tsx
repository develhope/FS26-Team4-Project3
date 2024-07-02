import { Link } from "react-router-dom";
import "../../index.css";

export default function Login3() {
  return (
    <>
      <div className="splashSection flex-auto align-center justify-center ">
        <h2 className="text-xl font-sans">Iscriviti</h2>
        <select name="paesi" id="paesi" className="font-sans splashForm mb-8">
          <option value="italia">Italia</option>
          <option value="stati-uniti">Stati Uniti</option>
          <option value="canada">Canada</option>
          <option value="regno-unito">Regno Unito</option>
          <option value="francia">Francia</option>
          <option value="germania">Germania</option>
          <option value="spagna">Spagna</option>
          <option value="australia">Australia</option>
          <option value="giappone">Giappone</option>
          <option value="cina">Cina</option>
        </select>
        <div className="splashFormContainer font-sans">
          <input
            type="text"
            placeholder="Nome"
            className="font-sans splashForm mb-8"
          />
          <input type="text" placeholder="Cognome" className=" splashForm" />
        </div>
        <input
          type="text"
          placeholder="Nome Utente"
          className="font-sans splashForm"
        />
        <input
          type="password"
          placeholder="Password"
          className="font-sans splashForm"
        />
        <input
          type="password"
          placeholder="Ridigita la Password"
          className="font-sans splashForm"
        />
        <div className="flex-row">
          <input type="checkbox" className="font-sans " />
          <p className="text-sm font-sans">Ho letto e accetto i </p>
          <a href="#" className="underline text-sm font-sans">
            Termini di servizio
          </a>
        </div>
        <Link to="/switchpet">
          <button
            type="submit"
            className="text-center bg-purple w-64  h-12 rounded-sm font-sans"
          >
          CI SIAMO QUASI...
          </button>
        </Link>
      </div>
    </>
  );
}
