import SettingsFooterNavbar from "../Navbars/SettingsFooterNavbar";
import SettingsHeaderNavbar from "../Navbars/SettingsHeaderNavbar";

export default function SettingsMainPage() {
  return (
    <div>
      <SettingsHeaderNavbar />
      <div className="bg-purple-500 text-white h-screen p-4">
      <h1 className=" text-2xl font-bold mb-4">Impostazioni</h1>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span>Centro e gestione dell'account</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Le tue attività</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Notifiche</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Tempo di utilizzo</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Privacy dell'account</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Amici</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Interazioni</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>Lingua</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span>aiuto</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
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
        <li className="flex items-center justify-between">
          <span>Esci</span>
          <span className="ml-auto">
            <span className="mr-2">{">"}</span>
          </span>
        </li>
      </ul>
    </div>
      <SettingsFooterNavbar />
    </div>
  );
}
