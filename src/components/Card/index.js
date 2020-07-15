import React from "react";

import styles from "./styles.module.css";

function Card({ title, content, icon }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
