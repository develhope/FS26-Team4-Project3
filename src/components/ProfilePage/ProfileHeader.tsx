import ai4 from "../../assets/random_imgs/ai4.jpg";
import ai3 from "../../assets/random_imgs/ai3.jpeg";

export default function ProfileHeader() {
  return (
    <div>
      <img src={ai3} alt="Pofile Cover" className="w-full h-40 object-cover" />

      <div className="flex flex-col items-center text-white -mt-12">
        <img
          src={ai4}
          alt="Profile Picture"
          className="rounded-full w-24 h-24 border-4 border-white"
        />
        <h2 className="mt-4 text-center font-sans">Username</h2>
      </div>
    </div>
  );
}
