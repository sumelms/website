import React from "react";

import {
  Container,
  Content,
  TopTitle,
  Title,
  Description,
  ContentImg,
} from "./styles";

function RowCard(props) {
  const { topTitle, title, children, image } = props;
  return (
    <Container {...props}>
      <Content>
        {topTitle && <TopTitle>{topTitle}</TopTitle>}
        {title && <Title>{title}</Title>}
        {children && <Description>{children}</Description>}
      </Content>
      <ContentImg>{image}</ContentImg>
    </Container>
  );
}

export default RowCard;
