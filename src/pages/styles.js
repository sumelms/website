import styled from "styled-components";

// import background from "@site/static/img/background.svg";

export const HeroBanner = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;

  background: url("/img/background.svg") no-repeat right bottom;
  background-size: 700px;
`;

export const Content = styled.div`
  padding: 0 2rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ContentText = styled.div`
  flex-direction: column;
  align-self: center;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
`;

export const HeroSubtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  /* color: var(--ifm-color-primary-dark-gray); */
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
`;

export const ContentImg = styled.div`
  align-self: flex-end;
  width: 600px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
