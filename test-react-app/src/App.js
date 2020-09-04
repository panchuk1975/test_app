import React from "react";
import MainConteiner from "./conteiners/MainConteiner";
import { useTranslation } from "react-i18next";

const App = (props) => {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <button onClick={() => handleClick('en')}>{t('English.1')}</button>
      <button onClick={() => handleClick('uk')}>{t('Ukrainian.1')}</button>
      <button onClick={() => handleClick('ru')}>{t('Russian.1')}</button>
      <MainConteiner state={props.state} />
  <p>{t('Thanks.1')}</p>
    </div>
  );
};

export default App;
