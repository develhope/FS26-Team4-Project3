import { Link } from "react-router-dom";
import "../../index.css";
import colored_logo from "../../assets/logo/colored_logo.png";

export default function Login2() {
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
          />
          <Link to="/login3">
            <div>
              <button
                type="submit"
                className="text-center bg-purple w-64  h-12 rounded-sm"
              >
                PROCEDI
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
