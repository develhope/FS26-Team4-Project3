import { Link } from "react-router-dom";
import arrow from "../../assets/navbar/arrow.png";

export default function SettingsHeaderNavbar() {
  return (
    <div className="bg-blue t-0 max-h-12 w-full pl-7 flex flex-row items-center">
      <Link to="/profilepage">
        <button>
          <img src={arrow} alt="go back" height={32} width={32} />
        </button>
      </Link>
    </div>
  );
}
