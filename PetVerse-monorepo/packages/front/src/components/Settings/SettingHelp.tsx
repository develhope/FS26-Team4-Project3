import SettingsOptionsNavbar from "../Navbars/SettingsOptionsNavbar";

export default function SettingHelp() {
  return (
    <>
      <SettingsOptionsNavbar />
      <div className="bg-purple-500 text-white h-screen p-4">
        <h1 className=" text-2xl font-bold mb-4">Aiuto</h1>
        <ul className="space-y-2">
          <li className="flex items-center justify-between">
            <span>Segnala un problema</span>
            <span className="ml-auto">
              <span className="mr-2">{">"}</span>
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span>Stato dell'account</span>
            <span className="ml-auto">
              <span className="mr-2">{">"}</span>
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span>Centro assistenza</span>
            <span className="ml-auto">
              <span className="mr-2">{">"}</span>
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span>Assistenza su privacy e sicurezza</span>
            <span className="ml-auto">
              <span className="mr-2">{">"}</span>
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span>Richiesta di assistenza</span>
            <span className="ml-auto">
              <span className="mr-2">{">"}</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
