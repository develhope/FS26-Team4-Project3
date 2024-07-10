import { useState } from "react";
import paw from "../../assets/post/paw.png";
import like from "../../assets/post/like.png";
import comments from "../../assets/post/comments.png";
import share from "../../assets/post/share.png";
import "../Cards/card.css";

type CardFeedProps = {
  img: string;
};

export function CardFeed({ img }: CardFeedProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-container rounded-lg">
      <div>
        <img src={img} alt="post-random" />
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
        <p className="Cmnts-tease ml-2.5">Vedi i commenti</p>
        <input
          type="text"
          placeholder="Lascia un commento"
          className="ml-2.5 mb-2"
        />
      </div>
    </div>
  );
}

export default CardFeed;
