import { Link } from "react-router-dom";

export default function LoginA() {
  return (
    <>
      <div className="splashSection flex-auto align-center justify-center ">
        <h2 className="text-xl font-sans font-bold">Registra il tuo animale</h2>
        <select
          name="animalReg"
          id="animalReg"
          className="font-sans splashForm mb-8"
        >
          <option value="Cane">Cane</option>
          <option value="Gatto">Gatto</option>
          <option value="Altro">Altro</option>
        </select>
        <div className="splashFormContainer font-sans">
          <input
            type="text"
            placeholder="Nome"
            className="font-sans splashForm mb-8"
          />
          <input type="text" placeholder="Razza" className=" splashForm" />
        </div>
        <select
          name="animalGender"
          id="animalGender"
          className="font-sans splashForm mb-8"
        >
          <option value="femmina">Femmina</option>
          <option value="maschio">Maschio</option>
          <option value="otherGender">Altro</option>
        </select>
        <input
          type="number"
          placeholder="Età"
          className="font-sans splashForm "
        />

        <Link to="/switchpet">
          <button
            type="submit"
            className="text-center bg-purple w-64  h-12 rounded-sm font-sans"
          >
          REGISTRA ANIMALE
          </button>
        </Link>
      </div>
    </>
  );
}
