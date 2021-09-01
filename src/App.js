import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
  {
    code: "cat",
    name: "Catalan",
    country_code: "cat",
  },
  {
    code: "esp",
    name: "Spanish",
    country_code: "es",
  },
  {
    code: "eng",
    name: "English",
    country_code: "gb",
  },
];

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div>
        <ul>
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <button onClick={() => i18next.changeLanguage(code)}>
                <p>{name}</p>
              </button>
            </li>,
            <li key={country_code}>
              <button onClick={() => i18next.changeLanguage(code)}>
                <p>{name}</p>
              </button>
            </li>,
            <li key={country_code}>
              <button onClick={() => i18next.changeLanguage(code)}>
                <p>{name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h1>{t("welcome_message")}</h1>
    </div>
  );
}

export default App;
