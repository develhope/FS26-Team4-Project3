import arrow from "../../assets/navbar/arrow.png";
import arrowp from "../../assets/navbar/arrowp.png";
import { Link } from "react-router-dom";

export default function EditorHeaderNavbar() {
  return (
    <>
      <div className="bg-blue h-14 w-full px-3 flex flex-row justify-between items-center">
        <Link to="/feed">
          <button>
            <img src={arrow} alt="go back" height={50} width={50} />
          </button>
        </Link>
        <Link to="/profilepage">
          <button>
            <img
              src={arrowp}
              alt="go forward"
              height={50}
              width={50}
              className="rotate-180"
            />
          </button>
        </Link>
      </div>
      <div className="h-1 bg-gradient-to-r from-navbar-line-start via-navbar-line-middle to-navbar-line-end"></div>
    </>
  );
}
