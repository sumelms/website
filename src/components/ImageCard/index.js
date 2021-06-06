import React from "react";

import styles from "./styles.module.css";

function RowCard(props) {
  const { topTitle, title, children, image, reverse } = props;
  return (
    <div className={`${styles.container} ${reverse && styles.reverse}`}>
      <div className={styles.columnText}>
        <div>
          {topTitle && <span className={styles.topTitle}>{topTitle}</span>}
          {title && <h4 className={styles.title}>{title}</h4>}
          {children && <div>{children}</div>}
        </div>
      </div>
      <div className={styles.columnImage}>{image}</div>
    </div>
  );
}

export default RowCard;
