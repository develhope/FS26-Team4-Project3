import send from "../../assets/post/send.png";
import ChatHeaderNavbar from "../Navbars/ChatHeaderNavbar";
import "././chat.css";

export function Chat() {
  return (
    <div>
      <ChatHeaderNavbar />
      <div className="Send-mess rounded-lg">
      <input type="text" className="rounded" />
      <img src={send} alt="invia" />
      </div>
    </div>
  );
}
