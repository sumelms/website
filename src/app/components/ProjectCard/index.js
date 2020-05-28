import React from "react";

import { Card, Title, Description } from "./styles";

function ProjectCard({ item }) {
  const { image, title, description } = item;
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

export default ProjectCard;
