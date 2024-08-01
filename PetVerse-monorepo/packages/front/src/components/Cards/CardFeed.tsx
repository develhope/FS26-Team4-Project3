import { useState } from "react";
import paw from "../../assets/post/paw.png";
import like from "../../assets/post/like.png";
import comments from "../../assets/post/comments.png";
import share from "../../assets/post/share.png";
import "../Cards/card.css";

type CardFeedProps = {
  img: string;
  nickname: string;
  post: string;
};

export function CardFeed({ img, nickname, post }: CardFeedProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="postContainer rounded-lg">
      <div>
        <img src={img} alt="post-random" />
      </div>
      <div className="reactionIcons">
        <img
          src={isLiked ? like : paw}
          alt="like"
          className="likePaw"
          onClick={handleLikeClick}
        />
        <img src={comments} alt="comment" className="reactComnts" />
        <img src={share} alt="share" className="shareIcon" />
      </div>
      <div className="textDash">
        <p className="userCaption">
          <strong>{nickname}</strong>
          {post}
        </p>
        <p className="cmntsTease ml-2.5">Vedi i commenti</p>
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
