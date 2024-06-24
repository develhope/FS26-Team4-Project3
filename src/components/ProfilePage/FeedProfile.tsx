import { CardPreview } from "../Cards/CardPreview";
import ai6 from "../../assets/random_imgs/ai6.jpg";
import ai9 from "../../assets/random_imgs/ai9.jpg";
import ai8 from "../../assets/random_imgs/ai8.jpg";
import ai11 from "../../assets/random_imgs/ai11.jpg";
import ai4 from "../../assets/random_imgs/ai4.jpg";
import ai7 from "../../assets/random_imgs/ai7.jpg";
import "././feedprof.css";

export function FeedProfile() {
  return (
    <div className="Imgs-feed-profile">
      <CardPreview img={ai6} />
      <CardPreview img={ai9} />
      <CardPreview img={ai8} />
      <CardPreview img={ai11} />
      <CardPreview img={ai4} />
      <CardPreview img={ai7} />
    </div>
  );
}
