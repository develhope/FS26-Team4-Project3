import send from "../../assets/post/send.png";
import "././chat.css";

export function Chat() {
  return (
    <div className="Send-mess rounded-lg">
      <input type="text" className="rounded" />
      <img src={send} alt="invia" />
    </div>
  );
}
