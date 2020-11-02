import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import {
  FiBookOpen,
  FiUser,
  FiLink,
  FiZap,
  FiGlobe,
  FiCheck,
} from "react-icons/fi";

import HomeBanner from "../components/HomeBanner";
import Button from "../components/Button";
import Section from "../components/Section";
import ImageCard from "../components/ImageCard";
import Card from "../components/Card";

import styles from "./styles.module.css";

const reasons = [
  {
    title: "Open-Source",
    content:
      "It is Open-Source and free to use. Sumé LMS is licensed by Apache 2.0. It means that you can download, host, and use it.",
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
      "It uses K8s, Container, React and Go. All the cool kids on the block are here.",
    icon: <FiZap size={24} />,
  },
  {
    title: "Distributed",
    content:
      "The application structure allows you to design and use micro-services.",
    icon: <FiGlobe size={24} />,
  },
  {
    title: "Community",
    content: "All knowledge developed by people must be owned by people.",
    icon: <FiLink size={24} />,
  },
  {
    title: "Compatible",
    content:
      "SCORM and xAPI were supported. But you should try to use Guaraná.",
    icon: <FiCheck size={24} />,
  },
];

const features = [
  {
    topTitle: "Student Space",
    title: "Your space to learn",
    description:
      "You can customize it and get access to the courses based on your interest. While you learn, the platform will also learn and adapt to help you to get the best results. The student space is the perfect place to improve the way that you learn while you follow your progress and get in touch with the instructor and other students.",
    image: <img src="img/img01.svg" alt="Img 01" />,
  },
  {
    topTitle: "Instructor Space",
    title: "Your space to learn",
    description:
      "The control of the content is in your hands. Get statistics about the student progress, and course statistics. Find out how to improve the way that your content is delivered to the students while you plan your course or next class.",
    image: <img src="img/img02.svg" alt="Img 02" />,
  },
  {
    topTitle: "For Organizations",
    title: "Company or school",
    description:
      "Distribute knowledge is part of your business, and your organization can have multiple spaces to learn, collaborate, and share. Manage multiple learning spaces, and help your collaborators or students in their learning journey.",
    image: <img src="img/img03.svg" alt="Img 03" />,
  },
];

const installs = [
  { url: "#", image: "img/linux.svg", title: "Self hosted" },
  { url: "#", image: "img/azure.svg", title: "Microsoft Azure" },
  { url: "#", image: "img/openShift.svg", title: "Red Hat Openshift" },
  { url: "#", image: "img/amazon.svg", title: "Amazon Cloud" },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sumé is a modern, fast, and open-source learning management system."
    >
      <Section>
        <HomeBanner />
      </Section>

      <Section title="Why Sumé LMS?">
        <div className={styles.sectionWhy}>
          {reasons.map((reason, index) => (
            <Card key={index} {...reason} />
          ))}
        </div>
      </Section>

      <Section>
        {features.map(({ description, ...rest }, index) => (
          <ImageCard key={index} {...rest} reverse={index % 2}>
            {description}
          </ImageCard>
        ))}
      </Section>

      <Section
        title="Install everywhere"
        subtitle="Some of our guides to help you to install."
      >
        <div className={styles.sectionInstall}>
          <ul>
            {installs.map((item, index) => (
              <li key={index}>
                <a href={item.url} title={item.title}>
                  <img src={useBaseUrl(item.image)} alt={item.title} />
                </a>
              </li>
            ))}
          </ul>

          <Button text="Getting started" href="#" />
        </div>
      </Section>

      <Section title="Do the Evolution">
        <div className={styles.sectionJoinUs}>
          <ImageCard
            image={<img src="/img/evolution.svg" alt="Do the Evolution" />}
          >
            <p>
              Together we can build a better future. Join us and help us to
              develop the future of the e-learning application.
            </p>
            <p>
              We are looking for great minds that want to help us to develop the
              best experience for everybody. Join us as a developer, designer,
              content creator, student, or educator.
            </p>
            <Button text="Join the community" href="#" />
          </ImageCard>
        </div>
      </Section>
    </Layout>
  );
}

export default Home;
