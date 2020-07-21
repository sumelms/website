import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;

  + div {
    margin-top: 4rem;
  }

  a {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopTitle = styled.span`
  color: var(--ifm-color-primary);
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`;

export const Description = styled.div``;

export const ContentImg = styled.div`
  img {
    max-width: 453px;
  }
`;
