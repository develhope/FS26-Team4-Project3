import ai6 from "../../assets/random_imgs/ai6.jpg";
import ai9 from "../../assets/random_imgs/ai9.jpg";
import ai8 from "../../assets/random_imgs/ai8.jpg";
import ai11 from "../../assets/random_imgs/ai11.jpg";
import ai4 from "../../assets/random_imgs/ai4.jpg";
import ai7 from "../../assets/random_imgs/ai7.jpg";
import ai12 from "../../assets/random_imgs/ai12.jpg";
import paw from "../../assets/post/paw.png";
import comments from "../../assets/post/comments.png";
import share from "../../assets/post/share.png";
import "../Posts/posts.css";
import EditorHeaderNavbar from "../Navbars/EditorHeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";

export function PostMain() {
  return (
    <div>
      <EditorHeaderNavbar />
      <div>
      <div className="Post rounded-lg">
        <div>
          <img src={ai12} alt="post-random" className="Random-img" />
        </div>
        <div className="Reaction-icons">
          <img src={paw} alt="like" className="Like-paw" />
          <img src={comments} alt="comment" className="React-comnts" />
          <img src={share} alt="share" className="Share-icon" />
        </div>
        <div>
          <p className="User-caption">
            <strong>nickname:</strong>
            <span>
              <input type="text" placeholder="scrivi una didascalia..." />
            </span>
          </p>
        </div>
      </div>
      <div className="Imgs-selector">
        <h3 className="rounded-md">Seleziona immagine:</h3>
        <div className="Imgs-block rounded">
          <img src={ai6} alt="img-ai-1" />
          <img src={ai9} alt="img-ai-2" />
          <img src={ai8} alt="img-ai-3" />
          <img src={ai11} alt="img-ai-4" />
          <img src={ai4} alt="img-ai-5" />
          <img src={ai7} alt="img-ai-6" />
        </div>
      </div>
    </div>
      <FooterNavbar />
    </div>
  );
}
