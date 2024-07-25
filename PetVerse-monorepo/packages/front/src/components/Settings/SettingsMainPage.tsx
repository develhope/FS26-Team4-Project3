import { Link } from "react-router-dom";
import SettingsFooterNavbar from "../Navbars/SettingsFooterNavbar";
import SettingsHeaderNavbar from "../Navbars/SettingsHeaderNavbar";

export default function SettingsMainPage() {
  return (
    <div>
      <SettingsHeaderNavbar />
      <div className="bg-purple-500 text-white h-screen p-4">
        <h1 className=" text-2xl font-bold mb-4">Impostazioni</h1>
        <ul className="space-y-2">
          <Link to="/settings/accountmanagement">
            <li className="flex items-center justify-between">
              <span>Centro e gestione dell'account</span>
              <span className="ml-auto">
                <span className="mr-2">{">"}</span>
              </span>
            </li>
          </Link>
          <li className="flex items-center justify-between">
            <span>Le tue attività</span>
            <span className="ml-auto">
              <span className="mr-2">{">"}</span>
            </span>
          </li>
          <Link to="/settings/notification">
            <li className="flex items-center justify-between mt-2">
              <span>Notifiche</span>
              <span className="ml-auto">
                <span className="mr-2">{">"}</span>
              </span>
            </li>
          </Link>
          <li className="flex items-center justify-between">
            <span>Tempo di utilizzo</span>
            <span className="ml-auto">
              <span className="mr-2">{">"}</span>
            </span>
          </li>
          <Link to="/settings/privacyaccount">
            <li className="flex items-center justify-between mt-2">
              <span>Privacy dell'account</span>
              <span className="ml-auto">
                <span className="mr-2">{">"}</span>
              </span>
            </li>
          </Link>
          <Link to="/settings/friends">
            <li className="flex items-center justify-between mt-2">
              <span>Amici</span>
              <span className="ml-auto">
                <span className="mr-2">{">"}</span>
              </span>
            </li>
          </Link>
          <Link to="/settings/interactions">
            <li className="flex items-center justify-between mt-2">
              <span>Interazioni</span>
              <span className="ml-auto">
                <span className="mr-2">{">"}</span>
              </span>
            </li>
          </Link>
          <Link to="/settings/language">
            <li className="flex items-center justify-between mt-2">
              <span>Lingua</span>
              <span className="ml-auto">
                <span className="mr-2">{">"}</span>
              </span>
            </li>
          </Link>
          <Link to="/settings/help">
            <li className="flex items-center justify-between mt-2">
              <span>Aiuto</span>
              <span className="ml-auto">
                <span className="mr-2">{">"}</span>
              </span>
            </li>
          </Link>
        </ul>
        <hr className="my-4 border-white" />
        <ul className="space-y-2">
          <h1 className=" text-2xl font-bold mb-4">Accesso</h1>
          <li className="flex items-center justify-between">
            <span>Aggiungi account</span>
            <span className="ml-auto">
              <span className="mr-2">{">"}</span>
            </span>
          </li>
          <Link to="/login1">
            <li className="flex items-center justify-between mt-2">
              <span>Esci</span>
              <span className="ml-auto">
                <span className="mr-2">{">"}</span>
              </span>
            </li>
          </Link>
        </ul>
      </div>
      <SettingsFooterNavbar />
    </div>
  );
}
