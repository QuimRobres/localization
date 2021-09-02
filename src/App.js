import React from "react";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./components/languageButtons/languageButtons";
import Title from "./components/Title/Title";
import TownDescription from "./components/TownDescription/TownDescription";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguageButtons></LanguageButtons>
      <Title></Title>
      <TownDescription></TownDescription>
     
    </div>
  );
}

export default App;
