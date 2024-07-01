import settings from "../../assets/navbar/settings.png";

export default function ProfileHeaderNavbar() {
    return (
    <div className="bg-blue t-0 h-12 w-full px-7 flex flex-row justify-between items-center">
        <button><h2 className="text-white font-bold">PetVerse</h2></button>
        <button><img src={settings} alt="go to settings" height={36} width={36} /></button>
    </div>)
}