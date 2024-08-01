import { Link } from "react-router-dom";
import settings from "../../assets/navbar/settings.png";

export default function ProfileHeaderNavbar() {
  return (
    <>
      <div className="bg-blue h-14 w-full px-4 flex flex-row justify-between items-center">
        <button>
          <h2 className="text-white font-semibold text-xl">PetVerse</h2>
        </button>
        <Link to="/settings">
          <button>
            <img src={settings} alt="go to settings" height={36} width={36} className="pt-1" />
          </button>
        </Link>
      </div>
      <div className="h-1 bg-gradient-to-r from-navbar-line-start via-navbar-line-middle to-navbar-line-end"></div>
    </>
  );
}
