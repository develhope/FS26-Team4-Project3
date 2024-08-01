import SettingsOptionsNavbar from "../Navbars/SettingsOptionsNavbar";

export default function SettingInteractions() {
  return (
    <>
      <SettingsOptionsNavbar />
      <div className="bg-purple-500 text-white h-screen p-4">
        <h1 className=" text-2xl font-bold mb-4">
          Come possono interagire gli altri con te
        </h1>
        <ul className="space-y-2">
          <li>Messaggi e risposte alle storie</li>
          <li>Tag e Menzioni</li>
          <li>Commenti e Hype</li>
          <li>Condivisione</li>
          <li>Account con restrizioni</li>
          <li>Limita le interazioni</li>
          <li>Versi nascosti</li>
          <li>Segui e invita pet</li>
        </ul>
      </div>
    </>
  );
}
