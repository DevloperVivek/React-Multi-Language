import React, { useState } from "react";
import i18next from "i18next";
import styles from "./Navbar.module.css";

function SwitchLanguages() {
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = (language) => {
    i18next.changeLanguage(language);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.languageDropdown}>
      <button className={styles.languageButton} onClick={toggleDropdown}>
        Language
      </button>
      {showDropdown && (
        <ul>
          <li onClick={() => changeLanguage("en")}>English</li>
          <li onClick={() => changeLanguage("hi")}>Hindi</li>
          <li onClick={() => changeLanguage("es")}>Spanish</li>
        </ul>
      )}
    </div>
  );
}

export default SwitchLanguages;
