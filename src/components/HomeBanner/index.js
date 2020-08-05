import React from "react";
import ReactRotatingText from "react-rotating-text";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

import Button from "../Button";

function Banner() {
  const texts = [
    "fast and modern.",
    "adaptative.",
    "open source.",
    "for everybody!",
  ];

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Education that evolved to be <br />
          <ReactRotatingText items={texts} />
        </h1>
        <h3 className={styles.subtitle}>
          Education that evolved, like knowledge and people.
        </h3>
        <div className={styles.actions}>
          <Button text="View on Github" href="https://github.com/sumelms" />
          <Button text="Download" href="#" />
        </div>
      </div>
      <div className={styles.image}>
        <img src={useBaseUrl("img/HeroImage.svg")} alt="HeroImage.svg" />
      </div>
    </div>
  );
}

export default Banner;
