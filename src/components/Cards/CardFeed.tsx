import { useState } from "react";
import paw from "../../assets/post/paw.png";
import like from "../../assets/post/like.png";
import comments from "../../assets/post/comments.png";
import share from "../../assets/post/share.png";
import ai12 from "../../assets/random_imgs/ai12.jpg";
import "../Cards/card.css";

export function CardFeed() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-container rounded-lg">
      <div className="">
        <img src={ai12} alt="post-random" />
      </div>
      <div className="Reaction-icons">
        <img
          src={isLiked ? like : paw}
          alt="like"
          className="Like-paw"
          onClick={handleLikeClick}
        />
        <img src={comments} alt="comment" className="React-comnts" />
        <img src={share} alt="share" className="Share-icon" />
      </div>
      <div className="text-dash">
        <p className="User-caption">
          <strong>nickname:</strong> didascalia post
        </p>
        <p className="Cmnts-tease">Vedi i commenti</p>
        <input type="text" placeholder="Lascia un commento" />
      </div>
    </div>
  );
}

export default CardFeed;
