import React from "react";

import { Container, Title, Content } from "./styles";

function Card({ title, content, icon }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}

export default Card;
