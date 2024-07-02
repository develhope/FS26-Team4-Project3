import FeedHeaderNavbar from "../Navbars/FeedHeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";
import CardFeed from "./CardFeed";

export default function Feed() {
  return (
    <div>
      <FeedHeaderNavbar />
      <CardFeed />
      <FooterNavbar />
    </div>
  );
}
