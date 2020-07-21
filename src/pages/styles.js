import styled from "styled-components";

export const HeroBanner = styled.div`
  height: auto;
  width: 100vw;
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
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
`;

export const ContentImg = styled.div`
  align-self: flex-end;
  width: 500px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -1.5rem;
`;

export const ContentLogos = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 2rem;
`;

export const InstallLogo = styled.li`
  + li {
    margin-left: 2rem;
  }
`;

export const Wrapped = styled.div`
  text-align: center;

  > a {
    margin-top: 4rem;
  }
`;
