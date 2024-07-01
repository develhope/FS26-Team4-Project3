import original_logo from "../../assets/logo/original_logo.png";
import cat from "../../assets/user_avatars/cat.png";

export default function SettingsFooterNavbar() {
    return (
    <div className="bg-blue b-0 max-h-12 w-full pr-2 flex flex-row justify-center items-center">
        <button><img src={original_logo} alt="reload feed" height={48} width={48} /></button>
        <h2 className="pl-11 pr-7 text-white font-bold">PetVerse</h2>
        <button><img src={cat} alt="go to profile page" height={52} width={52} /></button>
    </div>)
}