import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";

function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <div className={styles.gradientBackground}></div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1>{t("home.title")}</h1>
          <p>{t("home.content")}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
