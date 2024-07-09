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

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div className=" flex flex-col min-h-screen bg-blue-500">
      <ChatHeaderNavbar />
      <div className="flex-grow flex flex-col mt-3">
        <div className="flex-grow overflow-y-auto p-4 Messages">
          {messages.map((message) => (
            <div key={message.id} className="Message rounded-3xl">
              {message.text}
            </div>
          ))}
        </div>
        <div className="Send-mess flex items-center p-2 w-96 mx-auto mb-3 rounded-2xl">
          <input
            type="text"
            className="flex-grow p-2 bg-transparent text-white border-none focus:outline-none"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Scrivi un messaggio..."
          />
          <img
            src={send}
            alt="invia"
            onClick={handleSendClick}
            className="w-9 h-9 ml-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
