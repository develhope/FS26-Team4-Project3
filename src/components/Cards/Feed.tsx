import FeedHeaderNavbar from "../Navbars/FeedHeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";
import CardFeed from "./CardFeed";

export default function Feed() {
  return (
    <div className="relative min-h-screen bg-blue flex flex-col pb-9 pt-16">
      <FeedHeaderNavbar />
      <CardFeed />
      <CardFeed />
      <CardFeed />
      <CardFeed />
      <FooterNavbar />
    </div>
  );
}
