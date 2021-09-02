import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./languageButtons.css";

const languages = [
    {
      code: "cat",
      name: "Català",
      country_code: "cat",
    },
    {
      code: "esp",
      name: "Español",
      country_code: "es",
    },
    {
      code: "eng",
      name: "English",
      country_code: "gb",
    },
  ];

export default function languageButtons() {

  return (
    <div className="language-section">
      <ul className="language-bar">
        {languages.map(
          ({ code, name, country_code }) => (
            (
              <li key={country_code}>
                <button className="button" onClick={() => i18next.changeLanguage(code)}>
                  <p>{name}</p>
                </button>
              </li>
            ),
            (
              <li key={country_code}>
                <button className="button" onClick={() => i18next.changeLanguage(code)}>
                  <p>{name}</p>
                </button>
              </li>
            ),
            (
              <li key={country_code}>
                <button className="button" onClick={() => i18next.changeLanguage(code)}>
                  <p>{name}</p>
                </button>
              </li>
            )
          )
        )}
      </ul>
    </div>
  );
}
