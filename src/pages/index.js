import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import {
  FiBookOpen,
  FiUser,
  FiLink,
  FiZap,
  FiGlobe,
  FiCheck,
} from "react-icons/fi";

import HeroImage from "@site/static/img/HeroImage.svg";

import Section from "../components/Section";
import Card from "../components/Card";
import RowCard from "../components/RowCard";
import ReactRotatingText from "react-rotating-text";
import Button from "../components/Button";

import {
  HeroBanner,
  Content,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  ContentText,
  ContentImg,
  ContentCard,
  ContentLogos,
  InstallLogo,
  Wrapped,
} from "./styles.js";

const reasons = [
  {
    title: "Open Source",
    content:
      "It is Open Source and free to use. Sumé LMS is licensed by Apache 2.0. It means that you can download, host and use.",
    icon: <FiBookOpen size={24} />,
  },
  {
    title: "People",
    content:
      "Designed by people to people, to understand his needs and desires for a better experience.",
    icon: <FiUser size={24} />,
  },
  {
    title: "Modern",
    content:
      "Developed and tested with modern frameworks and libraries like React and Laravel.",
    icon: <FiZap size={24} />,
  },
  {
    title: "Distributed",
    content:
      "The application structure allows you to design and use microservices.",
    icon: <FiGlobe size={24} />,
  },
  {
    title: "Community",
    content: "All knowledge developed by people must be owned by people.",
    icon: <FiLink size={24} />,
  },
  {
    title: "Compatible",
    content: "SCORM and xAPI supported. But you should try to use Guaraná.",
    icon: <FiCheck size={24} />,
  },
];

const features = [
  {
    topTitle: "Student Space",
    title: "Your space to learn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos, itaque perferendis eaque iure sequi cumque ea nostrum corrupti maiores fugit culpa praesentium velit quis deserunt distinctio natus atque dolore?",
    image: <img src="img/img01.svg" alt="Img 01" />,
  },
  {
    topTitle: "Instructor Space",
    title: "Your space to learn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos, itaque perferendis eaque iure sequi cumque ea nostrum corrupti maiores fugit culpa praesentium velit quis deserunt distinctio natus atque dolore?",
    image: <img src="img/img02.svg" alt="Img 02" />,
  },
  {
    topTitle: "Comunity",
    title: "Interact with the community",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos, itaque perferendis eaque iure sequi cumque ea nostrum corrupti maiores fugit culpa praesentium velit quis deserunt distinctio natus atque dolore?",
    image: <img src="img/img03.svg" alt="Img 03" />,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HeroBanner>
        <Content>
          <ContentText>
            <HeroTitle>
              Education to be <br />
              <ReactRotatingText
                items={["adaptative!", "open source!", "for all!"]}
              />
            </HeroTitle>

            <HeroSubtitle>
              Education that evolved, like knowledge and people.
            </HeroSubtitle>

            <HeroButtons>
              <Button text="View on Github" href="#" />
              <Button text="Download" href="#" />
            </HeroButtons>
          </ContentText>
          <ContentImg>
            <img src="/img/HeroImage.svg" alt="HeroImage.svg" />
          </ContentImg>
        </Content>
      </HeroBanner>

      <Section title="Why Sumé LMS?">
        <ContentCard>
          {reasons.map((reason, index) => (
            <Card key={index} {...reason} />
          ))}
        </ContentCard>
      </Section>

      <Section>
        {features.map(({ description, ...rest }, index) => (
          <RowCard key={index} {...rest} reverse={index % 2}>
            {description}
          </RowCard>
        ))}
      </Section>

      <Section
        title="Install everywhere"
        subtitle="Some of our guides to help you to install."
        centralize="center"
      >
        <Wrapped>
          <ContentLogos>
            <InstallLogo>
              <a href="#">
                <img src="img/linux.svg" alt="Self Host" />
              </a>
            </InstallLogo>
            <InstallLogo>
              <a href="#">
                <img src="img/azure.svg" alt="Microsoft Azure" />
              </a>
            </InstallLogo>
            <InstallLogo>
              <a href="#">
                <img src="img/openShift.svg" alt="Red Hat Openshift" />
              </a>
            </InstallLogo>
            <InstallLogo>
              <a href="#">
                <img src="/img/amazon.svg" alt="Amazon Cloud" />
              </a>
            </InstallLogo>
          </ContentLogos>

          <Button text="Getting started" href="#" />
        </Wrapped>
      </Section>

      <Section title="Do the Evolution">
        <RowCard
          image={<img src="/img/evolution.svg" alt="Do the Evolution" />}
        >
          <p>
            Together we can make the future better. Join us and help us to build
            the future of e-learning applications.
          </p>
          <p>
            You can get engaged as a software developer, designer, UX, video
            creator, content creator, or educator.
          </p>
          <Button text="Join the community" href="#" />
        </RowCard>
      </Section>
    </Layout>
  );
}

export default Home;
