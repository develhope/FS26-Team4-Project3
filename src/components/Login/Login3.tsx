import { useNavigate } from "react-router-dom";
import "../../index.css";
import colored_logo from "../../assets/logo/colored_logo.png";
import "../../components/Login/Login.css";
import { useState } from "react";
import { addUser } from "./LoginContext";

export default function Login3() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  function handleRegistration() {
    if (!email || !password || !confirmPassword || !nome || !cognome) {
      alert("Per favore completa tutti i campi.");
      return;
    }

    if (password !== confirmPassword) {
      alert("La password e la conferma password non corrispondono.");
      return;
    }

    const newUser = {
      email: email,
      password: password,
    };

    addUser(newUser);

    navigate("/switchpet");
  }

  return (
    <div>
      <div className="splashSection flex-auto align-center justify-center spotlight">
        <div className="SplashLogoContainer">
          <img src={colored_logo} alt="" className="z" />
        </div>
        <h2 className="text-xl font-sans">Iscriviti</h2>
        <form className="Form-container my-2">
          <select
            name="paesi"
            id="paesi"
            className=" splashForm-select p-3 my-2"
          >
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
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className=" splashForm my-2"
          />
          <input
            type="text"
            placeholder="Cognome"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            className=" splashForm my-2"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-sans splashForm my-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-sans splashForm my-2"
          />
          <input
            type="password"
            placeholder="Ridigita la Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="font-sans splashForm my-2"
          />
          <div className="flex">
            <input type="checkbox" className="" />
            <div className="ml-3 flex ">
              <p className="text-sm font-sans">Ho letto e accetto i </p>
              <a href="#" className="underline text-sm font-sans mx-1">
                Termini di servizio
              </a>
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="text-center bg-purple w-64  h-12 rounded-sm font-sans"
          onClick={handleRegistration}
        >
          CI SIAMO QUASI...
        </button>
      </div>
    </div>
  );
}
