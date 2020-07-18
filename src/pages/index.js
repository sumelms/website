import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

import {
  FiBookOpen,
  FiUser,
  FiLink,
  FiZap,
  FiGlobe,
  FiCheck,
} from "react-icons/fi";

import HeroImage from "@site/static/img/HeroImage.svg";
import Img00 from "@site/static/img/img00.svg";
import Img01 from "@site/static/img/img01.svg";
import Img02 from "@site/static/img/img02.svg";
import Img03 from "@site/static/img/img03.svg";
import Img04 from "@site/static/img/img04.svg";
import Img05 from "@site/static/img/img05.svg";

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
  ContentRowCard,
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
    image: <Img00 />,
  },
  {
    topTitle: "Instructor Space",
    title: "Your space to learn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos, itaque perferendis eaque iure sequi cumque ea nostrum corrupti maiores fugit culpa praesentium velit quis deserunt distinctio natus atque dolore?",
    image: <Img00 />,
  },
  {
    topTitle: "Comunity",
    title: "Interact with the community",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos, itaque perferendis eaque iure sequi cumque ea nostrum corrupti maiores fugit culpa praesentium velit quis deserunt distinctio natus atque dolore?",
    image: <Img00 />,
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
              Education that envolves to be <br />
              <ReactRotatingText
                items={["adaptative!", "open source!", "for all!"]}
              />
            </HeroTitle>

            <HeroSubtitle>
              Education that envolved, like knowledge and people.
            </HeroSubtitle>

            <HeroButtons>
              <Button text="View on Github" href="#" />
              <Button text="Download" href="#" />
            </HeroButtons>
          </ContentText>
          <ContentImg>
            <HeroImage width="100%" />
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
        <ContentRowCard>
          {features.map((feature, index) => (
            <RowCard key={index} {...feature} />
          ))}
        </ContentRowCard>
      </Section>

      <Section></Section>

      <Section title="Simple to use">
        <p>
          Designed by people to people. It is easy to install, configure and
          use.
        </p>
        <div>
          <Img04 />
        </div>
      </Section>

      <Section title="Installs everywhere">
        <p>Some of our guides to help you to install.</p>
        <ul>
          <li>
            <a href="#">
              <img src="#" alt="Self Host" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="#" alt="Microsoft Azure" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="#" alt="Red Hat Openshift" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="#" alt="Amazon Cloud" />
            </a>
          </li>
        </ul>

        <Button text="Getting started" href="#" />
      </Section>

      <Section>
        <div>
          <h2>Do the Evolution</h2>
          <p>
            Together we can make the future better. Join us and help us to build
            the future of e-learning applications.
          </p>
          <p>
            You can get engaged as a software developer, designer, UX, video
            creator, content creator, or educator.
          </p>
          <Button text="Join the community" href="#" />
        </div>
        <div>
          <Img05 />
        </div>
      </Section>
    </Layout>
  );
}

export default Home;
