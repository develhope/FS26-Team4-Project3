import { Link } from "react-router-dom";
import notifications from "../../assets/navbar/notifications.png";
// import line from "../../assets/navbar/colored_band.png";

// export default function FeedHeaderNavbar() {
//   return (
//     <>
//       <div className="bg-blue max-h-12 w-full px-7 flex flex-row justify-between items-center z-50 fixed top-0 left-0 right-0">
//         <button>
//           <h2 className="text-white font-bold">PetVerse</h2>
//         </button>
//         <button>
//           <img
//             src={notifications}
//             alt="go to settings"
//             height={36}
//             width={36}
//           />
//         </button>
//       </div>
//       <div className="z-50 "><img src={line} alt="rainbow line" /></div>
//     </>
//   );
// }

import { useState, useEffect } from "react";

export default function FeedHeaderNavbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setVisible(false);
      } else {
        // if scroll up show the navbar
        setVisible(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-blue h-14 w-full px-4 flex flex-row justify-between items-center z-50">
        <button>
          <h2 className="text-white font-semibold text-xl">PetVerse</h2>
        </button>
        <Link to="/notifications">
          <button>
            <img
              src={notifications}
              alt="go to settings"
              height={36}
              width={36}
            />
          </button>
        </Link>
      </div>
      <div className="h-1 bg-gradient-to-r from-navbar-line-start via-navbar-line-middle to-navbar-line-end"></div>
    </nav>
  );
}
