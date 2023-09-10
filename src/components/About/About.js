import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../Home/Home.module.css";

function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <div className={styles.gradientBackground}></div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1>{t("about.title")}</h1>
          <p>{t("about.content")}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
