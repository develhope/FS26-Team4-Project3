import colored_logo from "../assets/logo/colored_logo.png";
import cat_dark from "../assets/splash/cat_dark.png";
import dog_dark from "../assets/splash/dog_dark.png";
import fish_dark from "../assets/splash/fish_dark.png";

export default function Splash() {
  return (
    <>
      <div className="splashSection splashSpotlight  flex-auto align-center text-5xl">
        <h6 className="mt-7">PetVerse</h6>
        <div className="SplashLogoContainer mb-1.5">
          <img src={colored_logo} alt="" />
        </div>
        <div className="flex-col">
          <div className="w-24 h-auto rotate-45">
            <img src={fish_dark} alt="fish" />
          </div>
          <div className="w-44 h-auto rotate-180">
            <img src={cat_dark} alt="cat" />
          </div>
          <div className="w-52 h-auto -rotate-45">
            <img src={dog_dark} alt="dog" />
          </div>
        </div>
      </div>
    </>
  );
}
