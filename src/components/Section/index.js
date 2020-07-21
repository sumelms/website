import React from "react";

import styles from "./styles.module.css";

function Section(props) {
  const { children, title, subtitle, centered } = props;
  return (
    <div className={`${styles.container} ${centered && styles.centered}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
      {children}
    </div>
  );
}

export default Section;
