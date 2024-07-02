import { useState, ChangeEvent, KeyboardEvent } from "react";
import send from "../../assets/post/send.png";
import ChatHeaderNavbar from "../Navbars/ChatHeaderNavbar";
import "./chat.css";

type Message = {
  id: number;
  text: string;
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      const newMessage: Message = {
        id: Date.now(),
        text: inputValue,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div>
      <ChatHeaderNavbar />
      <div className="Chatting-center">
        <div className="Messages">
          {messages.map((message) => (
            <div key={message.id} className="Message rounded-lg">
              {message.text}
            </div>
          ))}
        </div>
        <div className="Send-mess rounded-lg">
          <input
            type="text"
            className="rounded"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Scrivi un messaggio..."
          />
          <img
            src={send}
            alt="invia"
            onClick={handleSendClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
