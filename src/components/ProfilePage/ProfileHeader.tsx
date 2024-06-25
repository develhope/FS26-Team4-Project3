import ai4 from "../../assets/random_imgs/ai4.jpg";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center p-6">
      <img src={ai4} alt="Profile Picture" className="rounded-full w-24 h-24" />
      <h2 className="mt-4 font-sans">Username</h2>
    </div>
  );
}
