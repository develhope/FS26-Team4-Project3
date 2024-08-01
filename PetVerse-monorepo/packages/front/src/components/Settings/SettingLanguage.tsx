import { useState } from "react";
import SettingsOptionsNavbar from "../Navbars/SettingsOptionsNavbar";

export default function SettingLanguage() {
  const [searchText, setSearchText] = useState<string>("");

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const languages = [
    "Italiano",
    "Inglese",
    "Francese",
    "Spagnolo",
    "Tedesco",
    "Giapponese",
    "Cinese",
    "Russo",
    "Portoghese",
    "Olandese",
    "Svedese",
    "Coreano",
    "Arabo",
    "Turco",
    "Polacco",
    "Norvegese",
    "Danese",
    "Finlandese",
  ];

  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language === selectedLanguage ? null : language);
    console.log(`Lingua selezionata: ${language}`);
  };

  return (
    <>
      <SettingsOptionsNavbar />
      <div className="bg-purple-500 text-white h-screen p-4">
        <input
          type="text"
          placeholder="Cerca lingua..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 rounded-lg outline-none text-black"
        />
        <hr className="my-4 border-white" />
        <ul>
          {filteredLanguages.map((language, index) => (
            <li
              key={index}
              onClick={() => handleLanguageSelect(language)}
              className={`cursor-pointer flex items-center justify-between hover:bg-white hover:text-black p-2 rounded-lg mb-2 ${
                selectedLanguage === language ? "bg-gray-300" : ""
              }`}
            >
              <span>{language}</span>
              {selectedLanguage === language && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
