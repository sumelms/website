import React from "react";

import { Container, Title, Content, Icon, ContentIcon } from "./styles";

function Card({ title, content, icon }) {
  return (
    <Container>
      <ContentIcon>
        <Icon>{icon}</Icon>
      </ContentIcon>

      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}

export default Card;
