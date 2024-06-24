import cat from "../../assets/user_avatars/cat.png";
import dog from "../../assets/user_avatars/dog.png";
import fish from "../../assets/user_avatars/fish.png";
import new_user from "../../assets/user_avatars/new_user.png";

export default function SwitchProfile() {
  return (
    <>
      <div className="splashSection justify-center">
        <h2 className="font-sans text-center text-3xl">
          Da dove vorresti accedere?
        </h2>
        <div className="flex mx-2">
          <button>
            <img src={cat} alt="cat-user" />
          </button>
          <button>
            <img src={dog} alt="dog-user" />
          </button>
          <button>
            <img src={fish} alt="fish-user" />
          </button>
          <button>
            <img src={new_user} alt="new-user" />
          </button>
        </div>
        <div className="my-3">
          <p className="font-sans underline text-center">
            Non possiedi un animale?
          </p>
          <button className="text-center bg-purple w-64  h-12 rounded-sm font-sans">
            CONTINUA
          </button>
        </div>
      </div>
    </>
  );
}
