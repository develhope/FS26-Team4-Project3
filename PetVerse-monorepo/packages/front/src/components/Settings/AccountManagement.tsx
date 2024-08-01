import SettingsOptionsNavbar from "../Navbars/SettingsOptionsNavbar";

export default function AccountManagement() {
  return (
    <>
      <SettingsOptionsNavbar />
      <div className="bg-purple-500 text-white h-screen p-4 mb-4">
        <h1 className=" text-2xl font-bold mb-4">Centro gestione Account</h1>
        <div className="mb-8">
          <h1 className="  font-bold mb-1">Funzioni collegate</h1>
          <ul className="space-y-0.5">
            <li>Condividire su diversi profili</li>
            <li>Accedere con gli account</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-1">Impostazioni account</h1>
          <ul className="space-y-0.5">
            <li>password e sicurezza</li>
            <li>dettagli personali </li>
            <li>le tue informazioni e autorizzazioni</li>
          </ul>
        </div>
      </div>
    </>
  );
}
