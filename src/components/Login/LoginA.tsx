import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAnimal, Animal } from "./AnimalContext";
export default function LoginA() {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState<Animal>({
    name: "",
    type: "",
    breed: "",
    gender: "",
    age: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAnimal({ ...animal, [name]: value });
  };

  function handleRegisterAnimal() {
    if (!animal.name || !animal.breed || !animal.age) {
      alert("Per favore completa tutti i campi.");
      return;
    }

    addAnimal(animal);

    navigate("/switchpet");
  }

  return (
    <>
      <div className="splashSection flex-auto align-center justify-center ">
        <h2 className="text-xl font-sans font-bold">Registra il tuo animale</h2>
        <select
          name="type"
          id="animalReg"
          value={animal.type}
          onChange={handleInputChange}
          className="font-sans splashForm mb-8"
        >
          <option value="Cane">Cane</option>
          <option value="Gatto">Gatto</option>
          <option value="Altro">Altro</option>
        </select>
        <div className="splashFormContainer font-sans">
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={animal.name}
            onChange={handleInputChange}
            className="font-sans splashForm mb-8"
          />
          <input
            type="text"
            name="breed"
            placeholder="Razza"
            value={animal.breed}
            onChange={handleInputChange}
            className=" splashForm"
          />
        </div>
        <select
          name="animalGender"
          id="animalGender"
          value={animal.gender}
          onChange={handleInputChange}
          className="font-sans splashForm mb-8"
        >
          <option value="femmina">Femmina</option>
          <option value="maschio">Maschio</option>
          <option value="otherGender">Altro</option>
        </select>
        <input
          type="number"
          placeholder="Età"
          name="age"
          value={animal.age}
          onChange={handleInputChange}
          className="font-sans splashForm "
        />
        <button
          type="submit"
          onClick={handleRegisterAnimal}
          className="text-center bg-purple w-64  h-12 rounded-sm font-sans"
        >
          REGISTRA ANIMALE
        </button>
      </div>
    </>
  );
}
