import { useNavigate } from "react-router-dom";
import "../../index.css";
import colored_logo from "../../assets/logo/colored_logo.png";
import "../../components/Login/Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/registerU/registerUserSlice";

export default function Login3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

    dispatch(registerUser({ email, password, nome, cognome }));

    navigate("/switchpet");
  }

  return (
    <div>
      <div className="splashSection justify-center spotlight">
        <div className="splashLogoContainer">
          <img src={colored_logo} alt="" className="-mt-24" />
        </div>
        <div className="-mt-14">
          <h2 className="text-xl font-sans mb-2 text-center">Inserisci i tuoi dati</h2>
          <form className="formContainer space-y-2 flex flex-col">
            <select name="paesi" id="paesi" className="splashForm-select p-3">
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
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className=" splashForm w-28 p-3"
              />
              <input
                type="text"
                placeholder="Cognome"
                value={cognome}
                onChange={(e) => setCognome(e.target.value)}
                className=" splashForm w-28 p-3"
              />
            </div>
            <input
              type="email"
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
              className="font-sans splashForm"
            />
          </form>
          <div className="flex justify-center my-3">
            <input type="checkbox" className="" />
            <div className="ml-3 flex ">
              <p className="text-sm font-sans">Ho letto e accetto i </p>
              <a href="#" className="underline text-sm font-sans mx-1">
                Termini di servizio
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-purple w-56 h-12 rounded-lg font-semibold mt-2"
              onClick={handleRegistration}>
              ISCRIVITI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
