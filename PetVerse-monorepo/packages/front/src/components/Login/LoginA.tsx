import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Animal, useAnimal } from "../../assets/custom-hooks/AnimalContext";

export default function LoginA() {
  const navigate = useNavigate();

  const { addAnimal } = useAnimal();
  const [animal, setAnimal] = useState<
    Omit<Animal, "id"> & { type: Animal["type"] | "" }
  >({
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

  const handleRegisterAnimal = () => {
    if (!animal.name || !animal.breed || !animal.age || !animal.type) {
      alert("Per favore completa tutti i campi.");
      return;
    }

    if (
      animal.type !== "Cane" &&
      animal.type !== "Gatto" &&
      animal.type !== "Altro"
    ) {
      alert("Per favore seleziona un tipo valido di animale.");
      return;
    }

    addAnimal({ ...animal, id: Date.now() });

    navigate("/selectpet");
  };

  return (
    <div className="splashSection flex-auto align-center justify-center">
      <h2 className="text-3xl font-sans mb-4">Registra il tuo amico!</h2>
      <select
        name="type"
        id="animalReg"
        value={animal.type}
        onChange={handleInputChange}
        className="splashForm mb-2 w-56 h-14 p-2"
      >
        <option value="">Seleziona tipo</option>
        <option value="Cane">Cane</option>
        <option value="Gatto">Gatto</option>
        <option value="Altro">Altro</option>
      </select>
      <div className="splashFormContainer space-y-5">
        <input
          type="text"
          placeholder="Nome"
          name="name"
          value={animal.name}
          onChange={handleInputChange}
          className="splashForm mb-2 w-56 h-14 p-2"
        />
        <input
          type="text"
          name="breed"
          placeholder="Razza"
          value={animal.breed}
          onChange={handleInputChange}
          className="splashForm mb-2 w-56 h-14 p-2"
        />
      </div>
      <div className="flex space-x-2">
        <select
          name="gender"
          id="animalGender"
          value={animal.gender}
          onChange={handleInputChange}
          className="splashForm mb-2 mt-2 w-28 h-14 p-2 mr-2.5"
        >
          <option value="">Genere</option>
          <option value="Femmina">Femmina</option>
          <option value="Maschio">Maschio</option>
          <option value="Altro">Non so</option>
        </select>
        <input
          type="number"
          placeholder="Età"
          name="age"
          value={animal.age}
          onChange={handleInputChange}
          className="splashForm mb-2 mt-2 w-24 h-14 p-2"
        />
      </div>
      <button
        type="submit"
        onClick={handleRegisterAnimal}
        className=" bg-purple w-60 h-12 rounded-lg font-semibold mt-2"
      >
        REGISTRA PET
      </button>
    </div>
  );
}
