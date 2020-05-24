import React from "react";

import { Container, Title, Description } from "./styles";

function Section({ className, title, description, children }) {
  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      {children}
    </Container>
  );
}

export default Section;
