import { CardPreview } from "../Cards/CardPreview";
import ai6 from "../../assets/random_imgs/ai6.jpg";
import ai9 from "../../assets/random_imgs/ai9.jpg";
import ai8 from "../../assets/random_imgs/ai8.jpg";
import ai11 from "../../assets/random_imgs/ai11.jpg";
import ai4 from "../../assets/random_imgs/ai4.jpg";
import ai7 from "../../assets/random_imgs/ai7.jpg";
import ai3 from "../../assets/random_imgs/ai3.jpeg";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface ImageState {
  file: File | null;
  url: string | null;
}

export default function ProfilePage() {
  const [imageState, setImageState] = useState<ImageState>({
    file: null,
    url: ai4,
  });
  const filePickerRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setImageState({ file, url: fileUrl });
    }
  };

  useEffect(() => {
    return () => {
      if (imageState.url && imageState.url !== ai4) {
        URL.revokeObjectURL(imageState.url);
      }
    };
  }, [imageState.url]);

  const handleButtonClick = () => {
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

  return (
    <div>
      <img src={ai3} alt="Pofile Cover" className="w-full h-40 object-cover" />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={filePickerRef}
        hidden
      />
      <div
        className="flex flex-col items-center -mt-12"
        onClick={handleButtonClick}
      >
        {imageState.url && (
          <img
            src={imageState.url}
            alt="Profile Picture"
            className="rounded-full w-24 h-24 border-4 border-white cursor-pointer"
          />
        )}
      </div>
      <h2 className="mt-4 text-center font-sans text-white">Username</h2>
      <div className="flex justify-around font-sans p-4 text-white">
        <div className="text-center">
          <h3>Amici</h3>
          <p>100</p>
        </div>
        <div className="text-center">
          <h3>Followers</h3>
          <p>150</p>
        </div>
      </div>
      <div className="flex justify-around font-sans p-4">
        <button className="bg-purple text-white py-2 px-4 rounded">
          SEGUI
        </button>
        <button className="bg-teal text-white py-2 px-4 rounded">
          AGGIUNGI
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 p-4">
        <CardPreview img={ai6} />
        <CardPreview img={ai9} />
        <CardPreview img={ai8} />
        <CardPreview img={ai11} />
        <CardPreview img={ai4} />
        <CardPreview img={ai7} />
      </div>
    </div>
  );
}
