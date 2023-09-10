import React from "react";
import SwitchLanguages from "./SwitchLanguages";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Multi Language</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <div className={styles.languageDropdown}>
          <SwitchLanguages />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
