import arrow from "../../assets/navbar/arrow.png";

export default function EditorHeaderNavbar() {
    return (
    <div className="bg-blue t-0 max-h-12 w-full px-7 flex flex-row justify-between items-center">
        <button><img src={arrow} alt="go back" height={36} width={36} /></button>
        <button><img src={arrow} alt="go forward" height={36} width={36} className="rotate-180 fill-purple" /></button>
    </div>)
}