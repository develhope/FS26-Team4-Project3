import { useNavigate } from "react-router-dom";
import colored_logo from "../assets/logo/colored_logo.png";
import cat_dark from "../assets/splash/cat_dark.png";
import dog_dark from "../assets/splash/dog_dark.png";
import fish_dark from "../assets/splash/fish_dark.png";
import { useState } from "react";

export default function Splash() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login1");
    }, 3000);
  };

  return (
    <>
      <div className="splashSection splashSpotlight  flex-auto align-center text-5xl">
        <h6 className="mt-7 font-semibold">PetVerse</h6>
        <div>
          <img
            src={colored_logo}
            alt="Logo"
            onClick={handleClick}
            className="splashLogoContainer -mt-14 mr-3 cursor-pointer"
            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          />
        </div>
        <div className="flex flex-col items-center -mt-6 mr-2 static">
          <div className="w-24 h-auto">
            <img src={fish_dark} alt="fish" />
          </div>
          <div className="w-44 h-auto">
            <img src={cat_dark} alt="cat" />
          </div>
          <div className="w-52 h-auto">
            <img src={dog_dark} alt="dog" />
          </div>
        </div>
        {isLoading && (
          <p className="text-sm text-center bg-purple -mt-9 w-full">
            Caricamento in corso...
          </p>
        )}
      </div>
    </>
  );
}
