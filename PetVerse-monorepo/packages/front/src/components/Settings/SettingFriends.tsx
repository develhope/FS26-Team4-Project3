import SettingsOptionsNavbar from "../Navbars/SettingsOptionsNavbar";

export default function SettingFriends() {
  return (
    <>
      <SettingsOptionsNavbar />
      <div className="bg-purple-500 text-white h-screen p-4">
        <h1 className=" text-2xl font-bold mb-4">Amici</h1>
        <ul className="space-y-2">
          <li>Pet piu stretti</li>
          <li>Pet bloccati</li>
          <li>Nascondi storie</li>
        </ul>
      </div>
    </>
  );
}
