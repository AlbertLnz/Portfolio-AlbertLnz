import { useState } from "react";

const LanguageSelectorComponent = () => {
  const [mainLanguage, setMainLanguage] = useState("en");

  const handleSwap = () => {
    switch (mainLanguage) {
      case "en":
        setMainLanguage("es");
        window.location.href = 'http://localhost:4321/es';
        break;
      case "es":
        setMainLanguage("ca");
        window.location.href = 'http://localhost:4321/ca';
        break;
      case "ca":
        setMainLanguage("en");
        window.location.href = 'http://localhost:4321/en';
        break;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow rounded-lg bg-[#f6f7f9] dark:bg-[#171719] flex items-center justify-center">
        <button onClick={handleSwap}>
          <p className="items-center font-bold text-4xl p-3">{mainLanguage}</p>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelectorComponent;
