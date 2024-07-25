import { useState } from "react";
import SettingsOptionsNavbar from "../Navbars/SettingsOptionsNavbar";

export default function PrivacyAccount() {
  const [isPrivate, setIsPrivate] = useState(false);
  const [isPrivateImage, setIsPrivateImage] = useState(false);

  function handlePrivateToggle() {
    setIsPrivate(!isPrivate);
  }

  function handlePrivateImageToggle() {
    setIsPrivateImage(!isPrivateImage);
  }
  return (
    <>
      <SettingsOptionsNavbar />
      <div className="bg-purple-500 text-white h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Privacy Account</h1>
        <div className="mb-8">
          <div className="flex items-center space-x-4 p-4">
            <h1>Privacy Account</h1>
            <label
              htmlFor="toggle-switch"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggle-switch"
                  className="sr-only"
                  checked={isPrivate}
                  onChange={handlePrivateToggle}
                />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                    isPrivate ? "transform translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <div>
            <p>
              se imposti il tuo profilo come pubblico,chiunque su PetVerse e
              fuori da PetVerse puo vedere il tuo profilo e i relativi post
              anche se non ha un account PetVerse.
            </p>
            <p>
              se imposti il tuo profilo come privato, solo i followers che
              approvi possono vedere cosa condividi,inclusi i tuoi video e le
              tue foto, e le liste dei tuoi followers e dei Pet che segui
            </p>
            <p>
              alcune inforzioni del tuo profilo, come l'immagine del profilo e
              il nome utente, sono visibili a tutti su PetVerse e fuori da
              Petverse.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center space-x-4 p-4">
            <h1>Consenti espansione dell'immagine del profilo</h1>
            <label
              htmlFor="bdn-switch"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="bdn-switch"
                  className="sr-only"
                  checked={isPrivateImage}
                  onChange={handlePrivateImageToggle}
                />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                    isPrivateImage ? "transform translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <div>
            <p>
              consenti alle persone di vedere una versione piu grande della tua
              immagine profilo per aiutarle a capire chi sei tu.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
