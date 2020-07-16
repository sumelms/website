import styled from "styled-components";

export const HeroBanner = styled.div`
  padding: 0 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
`;

export const HeroSubtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  color: var(--ifm-color-primary-dark-gray);
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
`;

export const ContentText = styled.div``;

export const ContentImg = styled.div``;

export const ContentCard = styled.div`
  display: flex;

  & > div {
    display: flex;
  }
`;
