import styled from "styled-components";

import videoImgSrc from "../../assets/images/img01.jpg";

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: normal;
  line-height: 42px;
  margin-bottom: 0;

  strong {
    font-weight: 600;
  }
`;

export const Subtitle = styled.h3`
  text-align: center;
  font-weight: 300;
  line-height: 21px;
  margin-top: 4px;
`;

export const WelcomeSection = styled(Section)``;

export const VideoSection = styled(Section)`
  background-repeat: none;
  background-size: cover;
  background-image: url(${videoImgSrc});
  height: 600px;
`;

export const AboutSection = styled(Section)``;

export const PartnersSection = styled(Section)``;

export const ProjectsSection = styled(Section)``;

export const ServicesSection = styled(Section)``;

export const ContactSection = styled(Section)``;
