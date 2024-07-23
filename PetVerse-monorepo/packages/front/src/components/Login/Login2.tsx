import { useNavigate } from "react-router-dom";
import "../../index.css";
import colored_logo from "../../assets/logo/colored_logo.png";
import { useState } from "react";

export default function Login2() {
  const navigate = useNavigate();

  const [birthdate, setBirthdate] = useState("");

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
      alert("Devi avere almeno 14 anni per poterti registrare.");
    } else {
      navigate("/login3");
    }
  };

  return (
    <>
      <div className="splashSection spotlight align-center ">
        <div className="splashLogoContainer">
          <img src={colored_logo} alt="" />
        </div>
        <h2 className="text-xl font-sans font-semibold">
          Inserisci la tua data di nascita
        </h2>
        <div className="flex flex-col items-center gap-2">
          <input
            type="date"
            className="border-solid border-2 border-white rounded my-2"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <div>
            <button
              type="submit"
              className="self-center bg-purple w-56 h-12 rounded-lg font-semibold mt-2.5"
              onClick={handleProceed}
            >
              PROSEGUI
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
