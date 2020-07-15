import React from "react";
import styles from "./styles.module.css";

function Section({ children, title }) {
  return (
    <div className={styles.container}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </div>
  );
}

export default Section;
