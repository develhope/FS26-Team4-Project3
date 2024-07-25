import FeedHeaderNavbar from "../Navbars/FeedHeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";
import CardFeed from "./CardFeed";
import futura from "../../assets/random_imgs/futura.jpg";
import carlo from "../../assets/random_imgs/carlo.jpg";
import rex from "../../assets/random_imgs/rex.jpg";
import brunilde from "../../assets/random_imgs/brunilde.jpg";

export default function Feed() {
  return (
    <div className="relative min-h-screen bg-blue flex flex-col pb-9 pt-16">
      <FeedHeaderNavbar />
      <CardFeed img={futura} nickname="futura:" post=" Chi vuole giocare?" />
      <CardFeed
        img={carlo}
        nickname="carlo:"
        post=" E anche oggi non ho conquistato il mondo..."
      />
      <CardFeed img={rex} nickname="rex:" post=" Oggi c'è un freddo...cane!" />
      <CardFeed
        img={brunilde}
        nickname="brunilde:"
        post=" Ho bisogno di una vacanza."
      />
      <FooterNavbar />
    </div>
  );
}
