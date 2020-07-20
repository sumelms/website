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

  + div {
    margin-right: 2rem;
  }
`;

export const TopTitle = styled.span`
  color: var(--ifm-color-primary);
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`;

export const Description = styled.div`
  margin-top: 1rem;
`;

export const ContentImg = styled.div`
  svg {
    max-width: 600px;
  }
`;
