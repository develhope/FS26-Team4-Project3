import { useState } from "react";
import futura from "../../assets/random_imgs/futura.jpg";
import galleria2 from "../../assets/random_imgs/galleria2.jpg";
import galleria3 from "../../assets/random_imgs/galleria3.jpg";
import galleria4 from "../../assets/random_imgs/galleria4.jpg";
import galleria5 from "../../assets/random_imgs/galleria5.jpg";
import galleria6 from "../../assets/random_imgs/galleria6.jpg";
import emptyphoto from "../../assets/random_imgs/emptyphoto.png";
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
          <div>
            <p className="User-caption mt-3 mb-5">
              <strong>futura:</strong>
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
              src={futura}
              alt="img-ai-1"
              onClick={() => handleImageClick(futura)}
            />
            <img
              src={galleria2}
              alt="img-ai-2"
              onClick={() => handleImageClick(galleria2)}
            />
            <img
              src={galleria3}
              alt="img-ai-3"
              onClick={() => handleImageClick(galleria3)}
            />
            <img
              src={galleria4}
              alt="img-ai-4"
              onClick={() => handleImageClick(galleria4)}
            />
            <img
              src={galleria5}
              alt="img-ai-5"
              onClick={() => handleImageClick(galleria5)}
            />
            <img
              src={galleria6}
              alt="img-ai-6"
              onClick={() => handleImageClick(galleria6)}
            />
          </div>
        </div>
      </div>
      <FooterNavbar />
    </div>
  );
}
