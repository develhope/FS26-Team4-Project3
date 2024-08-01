import { Link } from "react-router-dom";
import arrow from "../../assets/navbar/arrow.png";

export default function SettingsHeaderNavbar() {
  return (
    <>
      <div className="bg-blue t-0 min-h-14 w-full pl-3 flex flex-row items-center pt-1">
        <Link to="/profilepage">
          <button>
            <img src={arrow} alt="go back" height={32} width={32} />
          </button>
        </Link>
      </div>
      <div className="h-1 bg-gradient-to-r from-navbar-line-start via-navbar-line-middle to-navbar-line-end"></div>
    </>
  );
}
