import FeedHeaderNavbar from "../Navbars/FeedHeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";
import CardFeed from "./CardFeed";
import ai4 from "../../assets/random_imgs/ai4.jpg";
import ai12 from "../../assets/random_imgs/ai12.jpg";
import ai11 from "../../assets/random_imgs/ai11.jpg";
import ai6 from "../../assets/random_imgs/ai6.jpg";

export default function Feed() {
  return (
    <div className="relative min-h-screen bg-blue flex flex-col pb-9 pt-16">
      <FeedHeaderNavbar />
      <CardFeed img={ai4} />
      <CardFeed img={ai12} />
      <CardFeed img={ai11} />
      <CardFeed img={ai6} />
      <FooterNavbar />
    </div>
  );
}
