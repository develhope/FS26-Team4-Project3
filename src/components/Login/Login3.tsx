import { useNavigate } from "react-router-dom";
import "../../index.css";
import colored_logo from "../../assets/logo/colored_logo.png";
import "../../components/Login/Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/register/registerUserSlice";

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
    <>
      <div className="splashSection flex-auto align-center justify-center spotlight">
        <div className="SplashLogoContainer">
          <img src={colored_logo} alt="" className="z" />
        </div>
        <h2 className="text-xl font-sans">Iscriviti</h2>
        <select name="paesi" id="paesi" className=" splashForm p-3">
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
        <div className="splashFormContainer ">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className=" splashForm my-1"
          />
          <input
            type="text"
            placeholder="Cognome"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            className=" splashForm"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="font-sans splashForm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="font-sans splashForm"
        />
        <input
          type="password"
          placeholder="Ridigita la Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="font-sans splashForm"
        />
        <div className="flex">
          <input type="checkbox" className="" />
          <div className="ml-3">
            <p className="text-sm font-sans">Ho letto e accetto i </p>
            <a href="#" className="underline text-sm font-sans">
              Termini di servizio
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="text-center bg-purple w-64  h-12 rounded-sm font-sans"
          onClick={handleRegistration}
        >
          CI SIAMO QUASI...
        </button>
      </div>
    </>
  );
}
