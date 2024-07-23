import { useState, ChangeEvent, KeyboardEvent } from "react";
import send from "../../assets/post/send.png";
import ChatHeaderNavbar from "../Navbars/ChatHeaderNavbar";
import "./chat.css";

type Message = {
  id: number;
  text: string;
  timestamp: Date;
};

export function FriendChat() {
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
        timestamp: new Date(),
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

  const formatDate = (date: Date) => {
    return date.toLocaleString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className=" flex flex-col min-h-screen bg-blue-500">
      <ChatHeaderNavbar />
      <div className="flex-grow flex flex-col mt-3">
        <div className="mt-1 ml-1">
          <p className="old-message rounded-2xl bg-teal">Ciaooooo</p>
          <p className="time text-white/50 -mt-2 ml-1">
            Inviato ieri alle 16:30
          </p>
        </div>
        <div className="mt-2 ml-1">
          <p className="old-message rounded-2xl bg-teal">Anche tu qui!</p>
          <p className="time text-white/50 -mt-2 ml-1">
            Inviato ieri alle 16:30
          </p>
        </div>
        <div className="mt-2 ml-1">
          <p className="old-message rounded-2xl bg-teal">Come stai?</p>
          <p className="time text-white/50 -mt-2 ml-1">
            Inviato ieri alle 16:31
          </p>
        </div>
        <div className="flex-grow overflow-y-auto p-3 messages">
          {messages.map((message) => (
            <div key={message.id} className="mb-2">
              <div className="message rounded-2xl">{message.text}</div>
              <div className="time text-white/50 ml-32 -mt-1">
                {formatDate(message.timestamp)}
              </div>
            </div>
          ))}
        </div>
        <div className="send-mess flex items-center p-2 w-96 mx-auto mb-3 rounded-2xl">
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
