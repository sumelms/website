import React from "react";
import ReactRotatingText from "react-rotating-text";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./styles.module.css";

import Button from "../Button";

function Banner() {
  const texts = [
    translate({
      id: "homepage.banner.animatedword.1",
      description: "Animated banner word.",
      message: "smart.",
    }),
    translate({
      id: "homepage.banner.animatedword.2",
      description: "Animated banner word.",
      message: "accessible.",
    }),
    translate({
      id: "homepage.banner.animatedword.3",
      description: "Animated banner word.",
      message: "open-source.",
    }),
    translate({
      id: "homepage.banner.animatedword.4",
      description: "Animated banner word.",
      message: "yours!.",
    }),
  ];

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          <Translate
            id="homepage.banner.pretext"
            description="This is the text that apears at the initial banner, before the animation words."
          >
            Education that evolved to be
          </Translate>{" "}
          <br />
          <ReactRotatingText items={texts} />
        </h1>
        <h3 className={styles.subtitle}>
          A fast and modern e-learning platform designed for humans.
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
