import React from "react";
import { I18nextProvider } from "react-i18next";
import ReactDOM from "react-dom";
import i18next from "i18next";
import en from "./languages/en.json";
import hi from "./languages/hi.json";
import es from "./languages/es.json";
import App from "./App";
import "./index.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    es: { translation: es },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
