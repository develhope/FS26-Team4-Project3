import { CardPreview } from "../Cards/CardPreview";
import futura2 from "../../assets/random_imgs/futura2.jpg";
import futura3 from "../../assets/random_imgs/futura3.jpg";
import futura4 from "../../assets/random_imgs/futura4.jpg";
import futura5 from "../../assets/random_imgs/futura5.jpg";
import futura7 from "../../assets/random_imgs/futura7.jpg";
import futura from "../../assets/random_imgs/futura.jpg";
import futura6 from "../../assets/random_imgs/futura6.jpg";
import profilewall3 from "../../assets/random_imgs/profilewall3.jpg";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ProfileHeaderNavbar from "../Navbars/ProfileHeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";

interface ImageState {
  file: File | null;
  url: string | null;
}

export default function ProfilePage() {
  const [imageState, setImageState] = useState<ImageState>({
    file: null,
    url: futura7,
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
      if (imageState.url && imageState.url !== futura7) {
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
      <ProfileHeaderNavbar />
      <div>
        <img
          src={profilewall3}
          alt="Pofile Cover"
          className="w-full h-48 object-cover"
        />
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
        <h2 className="mt-4 text-center font-sans text-white font-bold text-xl">
          Futura
        </h2>
        <div className="flex justify-center gap-10 font-sans p-3 text-white">
          <div className="text-center text-md">
            <h3>
              <strong>Amici</strong>
            </h3>
            <p>95</p>
          </div>
          <div className="text-center text-md">
            <h3>
              <strong>Followers</strong>
            </h3>
            <p>172</p>
          </div>
        </div>
        <div className="flex justify-center font-sans p-4 gap-4">
          <button className="bg-teal text-white py-2 px-4 rounded-lg text-sm w-40 h-11 font-semibold">
            AGGIUNGI
          </button>
          <button className="bg-purple text-white py-2 px-4 rounded-lg text-sm w-40 h-11 font-semibold">
            SEGUI
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 p-4">
          <CardPreview img={futura} />
          <CardPreview img={futura3} />
          <CardPreview img={futura4} />
          <CardPreview img={futura5} />
          <CardPreview img={futura2} />
          <CardPreview img={futura6} />
        </div>
      </div>
      <FooterNavbar />
    </div>
  );
}
