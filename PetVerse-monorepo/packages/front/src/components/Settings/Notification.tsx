import { useState } from "react";
import SettingsOptionsNavbar from "../Navbars/SettingsOptionsNavbar";

export default function Notification() {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isDoNotDisturb, setIsDoNotDisturb] = useState<boolean>(false);

  function handlePauseToggle() {
    setIsPaused(!isPaused);
  }

  function handleDisturbToggle() {
    setIsDoNotDisturb(!isDoNotDisturb);
  }

  return (
    <>
      <SettingsOptionsNavbar />
      <div className="bg-purple-500 text-white h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Notifiche</h1>
        <div className="mb-8">
          <h1 className="font-bold mb-1">Notifiche push</h1>
          <div className="flex items-center space-x-4 p-4">
            <h1>Metti tutte in pausa</h1>
            <label
              htmlFor="toggle-switch"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggle-switch"
                  className="sr-only"
                  checked={isPaused}
                  onChange={handlePauseToggle}
                />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                    isPaused ? "transform translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4">
          <h1>Non disturbare</h1>
          <label
            htmlFor="dnd-toggle"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="dnd-toggle"
                className="sr-only"
                checked={isDoNotDisturb}
                onChange={handleDisturbToggle}
              />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                  isDoNotDisturb ? "transform translate-x-6" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
        <div className="space-y-2 mt-4">
          <p>Post,storie e commenti</p>
          <p>Account seguiti e follower</p>
          <p>Messaggi</p>
          <p>Chiamate</p>
          <p>Video in diretta e reel</p>
          <p>Compleanni</p>
          <hr className="my-4 border-white" />
          <h2>Altri tipi di notifiche</h2>
          <p>notifiche e-mail</p>
        </div>
      </div>
    </>
  );
}
