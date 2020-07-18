import React from "react";

import {
  Container,
  Content,
  TopTitle,
  Title,
  Description,
  ContentImg,
} from "./styles";

function RowCard({ topTitle, title, description, image }) {
  return (
    <Container>
      <Content>
        <TopTitle>{topTitle}</TopTitle>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <ContentImg>{image}</ContentImg>
    </Container>
  );
}

export default RowCard;
