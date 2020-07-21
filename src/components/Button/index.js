import React from "react";

import styles from "./styles.module.css";

function Button({ text, ...rest }) {
  return (
    <a className={styles.button} {...rest}>
      {text}
    </a>
  );
}

export default Button;
