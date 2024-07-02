import { Link } from "react-router-dom";
import colored_logo from "../../assets/logo/colored_logo.png";
import "../../components/Login/Login.css";
function Login1() {
  return (
    <>
      <div className="splashSection spotlight">
        <div className="SplashLogoContainer">
          <img src={colored_logo} alt="" />
        </div>
        <div className="welcomeText">
          <h2 className="font-bold">Benvenuto</h2>
        </div>
        <div className="splashFormContainer">
          <div className="splashForm mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#e2e8f0"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="text"
              placeholder="Email o nome utente"
              className="font-sans"
            />
          </div>
          <div className="splashForm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#e2e8f0"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <input
              type="password"
              placeholder="Password"
              className="font-sans"
            />
          </div>
          <div className="text-center underline">
            <a href="#">Password dimenticata?</a>
          </div>
        </div>
        <Link to="/feed">
          <button className="text-center bg-purple w-64 h-12 rounded-sm">
            ACCEDI
          </button>
        </Link>
        <h6 className="font-sans text-center m-1 text-lg">
          Non hai ancora un account?
        </h6>
        <Link to="/login2">
          <button className="text-center bg-purple w-64 h-12 rounded-sm mb-5">
            REGISTRATI
          </button>
        </Link>
      </div>
    </>
  );
}

export default Login1;
