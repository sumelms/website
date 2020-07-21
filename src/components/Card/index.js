import React from "react";

import styles from "./styles.module.css";

function Card({ title, content, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      {content}
    </div>
  );
}

export default Card;
