import { Link } from "react-router-dom";
import NotificationNavbar from "./Navbars/NotificationNavbar";

export default function NotificationCenter() {
  return (
    <>
      <NotificationNavbar />
      <div className="relative min-h-screen bg-blue flex flex-col">
        <div className="bg-lightblue/80 text-white min-w-screen rounded-md text-md p-3 mt-2 mb-2 ml-2 mr-2">
          <p>
            <strong>10</strong> pet hanno gradito il tuo post.
          </p>
        </div>
        <div className="bg-lightblue/80 text-white min-w-screen rounded-md text-md p-3 mb-2 ml-2 mr-2 cursor-pointer">
          <p>
            Un pet ti ha mandato la richiesta di amicizia!
            <strong> Clicca qui </strong>per vedere il suo profilo e la sua
            richiesta.
          </p>
        </div>
        <div className="bg-lightblue/80  text-white min-w-screen rounded-md text-md p-3 mb-2 ml-2 mr-2">
          <p>
            <strong>User</strong> ha accettato la tua richiesta di amicizia!
          </p>
        </div>
        <div className="bg-lightblue/80 text-white min-w-screen rounded-md text-md p-3 mb-2 ml-2 mr-2">
          <p>
            <strong>5</strong> pet hanno gradito il tuo post.
          </p>
        </div>
        <div className="bg-lightblue/80 text-white min-w-screen rounded-md text-md p-3 mb-2 ml-2 mr-2">
          <p>
            <strong>User</strong> ha accettato la tua richiesta di amicizia!
          </p>
        </div>
        <Link to="/friendchat">
          <div className="bg-lightblue/80 text-white min-w-screen rounded-md text-md p-3 mb-2 ml-2 mr-2">
            <p>
              <strong>User 1</strong> ti ha inviato un messaggio.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
