import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centralize ? "center" : "left")};
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
`;

export const SubTitle = styled.h4`
  font-weight: 400;
`;

export const Content = styled.div``;
