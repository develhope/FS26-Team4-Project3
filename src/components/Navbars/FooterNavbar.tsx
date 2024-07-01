import search from "../../assets/navbar/search.png";
import add from "../../assets/navbar/add.png";
import original_logo from "../../assets/logo/original_logo.png";
import message from "../../assets/navbar/message.png";
import cat from "../../assets/user_avatars/cat.png";

export default function FooterNavbar() {
    return (
    <div className="bg-blue b-0 max-h-12 w-full px-7 flex flex-row justify-between items-center">
        <button><img src={search} alt="search content" height={30} width={30} /></button>
        <button><img src={add} alt="add post" height={36} width={36} /></button>
        <button><img src={original_logo} alt="reload feed" height={48} width={48} /></button>
        <button><img src={message} alt="open messages center" height={34} width={34} /></button>
        <button><img src={cat} alt="go to profile page" height={52} width={52} /></button>
    </div>)
}