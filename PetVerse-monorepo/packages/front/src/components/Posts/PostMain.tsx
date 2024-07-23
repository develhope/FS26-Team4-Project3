import { useState } from "react";
import ai6 from "../../assets/random_imgs/ai6.jpg";
import ai9 from "../../assets/random_imgs/ai9.jpg";
import ai8 from "../../assets/random_imgs/ai8.jpg";
import ai11 from "../../assets/random_imgs/ai11.jpg";
import ai4 from "../../assets/random_imgs/ai4.jpg";
import ai7 from "../../assets/random_imgs/ai7.jpg";
import emptyphoto from "../../assets/random_imgs/emptyphoto.png";
import paw from "../../assets/post/paw.png";
import comments from "../../assets/post/comments.png";
import share from "../../assets/post/share.png";
import "../Posts/posts.css";
import EditorHeaderNavbar from "../Navbars/EditorHeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";

export function PostMain() {
  const [mainImage, setMainImage] = useState<string>(emptyphoto);
  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div>
      <EditorHeaderNavbar />
      <div>
        <div className="post-container rounded-lg">
          <div>
            <img
              src={mainImage}
              alt="post-random"
              className="flex ml-auto mr-auto w-96"
            />
          </div>
          <div className="Reaction-icons">
            <img src={paw} alt="like" className="Like-paw" />
            <img src={comments} alt="comment" className="React-comnts" />
            <img src={share} alt="share" className="Share-icon" />
          </div>
          <div>
            <p className="User-caption">
              <strong>username:</strong>
              <span>
                <input type="text" placeholder="scrivi qualcosa qui" />
              </span>
            </p>
          </div>
        </div>
        <div className="Imgs-selector">
          <h3>Seleziona immagine:</h3>
          <div className="Imgs-block rounded">
            <img
              src={ai6}
              alt="img-ai-1"
              onClick={() => handleImageClick(ai6)}
            />
            <img
              src={ai9}
              alt="img-ai-2"
              onClick={() => handleImageClick(ai9)}
            />
            <img
              src={ai8}
              alt="img-ai-3"
              onClick={() => handleImageClick(ai8)}
            />
            <img
              src={ai11}
              alt="img-ai-4"
              onClick={() => handleImageClick(ai11)}
            />
            <img
              src={ai4}
              alt="img-ai-5"
              onClick={() => handleImageClick(ai4)}
            />
            <img
              src={ai7}
              alt="img-ai-6"
              onClick={() => handleImageClick(ai7)}
            />
          </div>
        </div>
      </div>
      <FooterNavbar />
    </div>
  );
}
