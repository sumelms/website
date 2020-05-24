import React from "react";

import { Container, Title, Description } from "./styles";

function ProjectCard({ item }) {
  const { image, title, description } = item;
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

export default ProjectCard;
