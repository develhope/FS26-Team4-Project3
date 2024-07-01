import arrow from "../../assets/navbar/arrow.png";
import arrowp from "../../assets/navbar/arrowp.png";

export default function EditorHeaderNavbar() {
    return (
    <div className="bg-blue t-0 h-12 w-full px-7 flex flex-row justify-between items-center">
        <button><img src={arrow} alt="go back" height={32} width={32} /></button>
        <button><img src={arrowp} alt="go forward" height={32} width={32} className="rotate-180" /></button>
    </div>)
}