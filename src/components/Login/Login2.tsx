import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import colored_logo from "../../assets/logo/colored_logo.png";
import { useState } from "react";

export default function Login2() {
  const navigate = useNavigate(); // Hook useNavigate per la navigazione

  const [birthdate, setBirthdate] = useState(""); // Stato per l'età inserita

  const handleProceed = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < 14) {
      alert("Devi avere almeno 14 anni per registrarti.");
    } else {
      navigate("/login3");
    }
  };

  return (
    <>
      <div className="splashSection spotlight align-center ">
        <div className="SplashLogoContainer">
          <img src={colored_logo} alt="" />
        </div>
        <h2 className="text-3xl font-sans">Inserisci la tua data di nascita</h2>
        <div className=" flex flex-col items-center gap-2 w-64 ">
          <input
            type="date"
            className="border-solid border-2 border-white rounded "
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <div>
            <button
              type="submit"
              className="text-center bg-purple w-64  h-12 rounded-sm"
              onClick={handleProceed}
            >
              PROCEDI
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
