import React from "react";

import { Container, Title, Content } from "./styles";

function Section({ children, title }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Content>{children}</Content>
    </Container>
  );
}

export default Section;
