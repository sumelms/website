import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 4rem 0;
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
  margin-bottom: 2rem;
`;

export const Description = styled.p``;

export const ContentImg = styled.div`
  .svg {
    width: 600px;
  }
`;
