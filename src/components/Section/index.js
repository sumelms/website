import React from "react";

import { Container, Title, SubTitle, Content } from "./styles";

function Section(props) {
  const { children, title, subtitle } = props;
  return (
    <Container {...props}>
      {title && <Title>{title}</Title>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <Content>{children}</Content>
    </Container>
  );
}

export default Section;
