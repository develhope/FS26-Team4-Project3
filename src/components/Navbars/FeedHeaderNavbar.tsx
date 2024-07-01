import notifications from "../../assets/navbar/notifications.png";

export default function FeedHeaderNavbar() {
    return (
    <div className="bg-blue t-0 max-h-12 w-full px-7 flex flex-row justify-between items-center">
        <button><h2 className="text-white font-bold">PetVerse</h2></button>
        <button><img src={notifications} alt="go to settings" height={36} width={36} /></button>
    </div>)
}