import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnimal, Animal } from "../../assets/custom-hooks/AnimalContext";

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
      <h2 className="text-3xl font-sans font-bold mb-4">
        Registra il tuo animale
      </h2>
      <select
        name="type"
        id="animalReg"
        value={animal.type}
        onChange={handleInputChange}
        className="font-sans splashForm mb-2 w-56 h-14 text-center"
      >
        <option value="">Seleziona tipo</option>
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
          className="font-sans splashForm mb-4"
        />
        <input
          type="text"
          name="breed"
          placeholder="Razza"
          value={animal.breed}
          onChange={handleInputChange}
          className="font-sans splashForm"
        />
      </div>
      <select
        name="gender"
        id="animalGender"
        value={animal.gender}
        onChange={handleInputChange}
        className="font-sans splashForm mb-2 w-56 h-14 text-center"
      >
        <option value="">Seleziona genere</option>
        <option value="Femmina">Femmina</option>
        <option value="Maschio">Maschio</option>
        <option value="Altro">Altro</option>
      </select>
      <input
        type="number"
        placeholder="Età"
        name="age"
        value={animal.age}
        onChange={handleInputChange}
        className="font-sans splashForm mb-4"
      />
      <button
        type="submit"
        onClick={handleRegisterAnimal}
        className="text-center bg-purple w-64 h-12 rounded-sm font-sans"
      >
        REGISTRA ANIMALE
      </button>
    </div>
  );
}
