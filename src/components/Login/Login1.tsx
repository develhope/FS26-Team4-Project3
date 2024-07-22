import { Link, useNavigate } from "react-router-dom";
import colored_logo from "../../assets/logo/colored_logo.png";
import "../../components/Login/Login.css";
import { User } from "../../assets/custom-hooks/LoginContext";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/login/loginSlice";
import { useUser } from "../../assets/custom-hooks/LoginContext";

function Login1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useUser();

  function handleLogin() {
    const foundUser: User | undefined = users.find(
      (user) => user.email === email
    );

    if (!foundUser) {
      alert("Utente non esiste, prova a registrarti.");
      return;
    }

    if (foundUser.password !== password) {
      alert("Password sbagliata, riprova.");
      return;
    }

    dispatch(loginUser({ email: foundUser.email }));
    navigate("/feed");
  }

  return (
    <>
      <div className="splashSection spotlight">
        <div className="splashLogoContainer">
          <img src={colored_logo} alt="" />
        </div>
        <div className="-mt-9 flex flex-col">
          <div className="welcomeText">
            <h2 className="font-bold mb-3">Benvenuto</h2>
          </div>
          <div className="splashFormContainer">
            <div className="splashForm mb-3">
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
                type="email"
                placeholder="Email o nome utente"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-sans"
              />
            </div>
            <div className="splashForm mb-1">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="font-sans"
              />
            </div>
            <div className="text-center underline mb-0.5 text-md">
              <a href="#">Password dimenticata?</a>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="self-center bg-purple w-56 h-12 rounded-lg font-semibold"
          >
            ACCEDI
          </button>

          <Link to="/login2" className="self-center">
            <button className=" bg-teal w-56 h-12 rounded-lg mt-3 font-semibold">
              REGISTRATI
            </button>
          </Link>
          <h6 className="font-sans text-center text-md font-">
            Non hai ancora un account?
          </h6>
        </div>
      </div>
    </>
  );
}

export default Login1;
