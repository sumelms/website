import React from "react";

import { Container } from "./styles";

function Button({ text, ...rest }) {
  return <Container {...rest}>{text}</Container>;
}

export default Button;
