import React from "react";
import ReactRotatingText from "react-rotating-text";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

function Banner({ phrase, words, subtitle, image, children }) {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          {phrase} <br />
          <ReactRotatingText items={words} />
        </h1>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <div className={styles.actions}>{children}</div>
      </div>
      <div className={styles.image}>
        <img src={useBaseUrl(image)} alt="Bannner image" />
      </div>
    </div>
  );
}

export default Banner;
