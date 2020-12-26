import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate, { translate } from "@docusaurus/Translate";

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
    title: translate({
      id: "reasons.item-list.1.title",
      description: "Reason list item title",
      message: "Open-Source",
    }),
    content: translate({
      id: "reasons.item-list.1.content",
      description: "Reason list item content",
      message:
        "It is Open-Source and free to use. Sumé LMS is licensed by Apache 2.0. It means that you can download, host, and use it.",
    }),
    icon: <FiBookOpen size={24} />,
  },
  {
    title: translate({
      id: "reasons.item-list.2.title",
      description: "Reason list item title",
      message: "People",
    }),
    content: translate({
      id: "reasons.item-list.2.content",
      description: "Reason list item content",
      message:
        "Designed by people to people, to understand his needs and desires for a better experience.",
    }),
    icon: <FiUser size={24} />,
  },
  {
    title: translate({
      id: "reasons.item-list.3.title",
      description: "Reason list item title",
      message: "Modern",
    }),
    content: translate({
      id: "reasons.item-list.3.content",
      description: "Reason list item content",
      message:
        "It uses K8s, Container, React and Go. All the cool kids on the block are here.",
    }),
    icon: <FiZap size={24} />,
  },
  {
    title: translate({
      id: "reasons.item-list.4.title",
      description: "Reason list item title",
      message: "Distributed",
    }),
    content: translate({
      id: "reasons.item-list.4.content",
      description: "Reason list item content",
      message:
        "The application structure allows you to design and use micro-services.",
    }),
    icon: <FiGlobe size={24} />,
  },
  {
    title: translate({
      id: "reasons.item-list.5.title",
      description: "Reason list item title",
      message: "Community",
    }),
    content: translate({
      id: "reasons.item-list.5.content",
      description: "Reason list item content",
      message: "All knowledge developed by people must be owned by people.",
    }),
    icon: <FiLink size={24} />,
  },
  {
    title: translate({
      id: "reasons.item-list.6.title",
      description: "Reasons list item title",
      message: "Compatible",
    }),
    content: translate({
      id: "reasons.item-list.6.content",
      description: "Reasons list item content",
      message:
        "SCORM and xAPI were supported. But you should try to use Guaraná.",
    }),
    icon: <FiCheck size={24} />,
  },
];

const features = [
  {
    topTitle: translate({
      id: "features.item-list.1.toptitle",
      description: "Feature list item toptitle",
      message: "Student Space",
    }),
    title: translate({
      id: "features.item-list.1.title",
      description: "Feature list item title",
      message: "Your space to learn",
    }),
    description: translate({
      id: "features.item-list.1.description",
      description: "Feature list item description",
      message:
        "You can customize it and get access to the courses based on your interest. While you learn, the platform will also learn and adapt to help you to get the best results. The student space is the perfect place to improve the way that you learn while you follow your progress and get in touch with the instructor and other students.",
    }),
    image: <img src="img/img01.svg" alt="Img 01" />,
  },
  {
    topTitle: translate({
      id: "features.item-list.2.toptitle",
      description: "Feature list item toptitle",
      message: "Instructor Space",
    }),
    title: translate({
      id: "features.item-list.2.title",
      description: "Feature list item title",
      message: "Your space to learn",
    }),
    description: translate({
      id: "features.item-list.2.description",
      description: "Feature list item description",
      message:
        "The control of the content is in your hands. Get statistics about the student progress, and course statistics. Find out how to improve the way that your content is delivered to the students while you plan your course or next class.",
    }),
    image: <img src="img/img02.svg" alt="Img 02" />,
  },
  {
    topTitle: translate({
      id: "features.item-list.3.toptitle",
      description: "Feature list item toptitle",
      message: "For Organizations",
    }),
    title: translate({
      id: "features.item-list.3.title",
      description: "Feature list item title",
      message: "Company or school",
    }),
    description: translate({
      id: "features.item-list.3.description",
      description: "Feature list item description",
      message:
        "Distribute knowledge is part of your business, and your organization can have multiple spaces to learn, collaborate, and share. Manage multiple learning spaces, and help your collaborators or students in their learning journey.",
    }),
    image: <img src="img/img03.svg" alt="Img 03" />,
  },
];

const installs = [
  { url: "#", image: "img/linux.svg", title: "Self hosted" },
  { url: "#", image: "img/azure.svg", title: "Microsoft Azure" },
  { url: "#", image: "img/openShift.svg", title: "Red Hat Openshift" },
  { url: "#", image: "img/amazon.svg", title: "Amazon Cloud" },
];

const words = [
  translate({
    id: "homepage.banner.words.1",
    description: "Animated banner word.",
    message: "smart.",
  }),
  translate({
    id: "homepage.banner.words.2",
    description: "Animated banner word.",
    message: "accessible.",
  }),
  translate({
    id: "homepage.banner.words.3",
    description: "Animated banner word.",
    message: "open-source.",
  }),
  translate({
    id: "homepage.banner.words.4",
    description: "Animated banner word.",
    message: "yours!",
  }),
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.customFields.description}`}
    >
      <Section>
        <HomeBanner
          phrase={translate({
            id: "homepage.banner.phrase",
            description: "Homepage banner phrase",
            message: "Education that evolved to be",
          })}
          subtitle={translate({
            id: "homepage.banner.subtitle",
            description: "Homepage banner subtitle",
            message:
              "A fast and modern e-learning platform designed for humans.",
          })}
          image="img/HeroImage.svg"
          words={words}
        >
          <Button
            text={translate({
              id: "homepage.banner.button-github",
              description: "Homepage banner button to visit github",
              message: "View on Github",
            })}
            href="https://github.com/sumelms"
          />
          <Button
            text={translate({
              id: "homepage.banner.button-download",
              description: "Homepage banner button to download",
              message: "Download",
            })}
            href="#"
          />
        </HomeBanner>
      </Section>

      <Section
        title={translate({
          id: "homepage.section.reasons.title",
          description: "Homepage Reasons section title",
          message: "Why Sumé LMS?",
        })}
      >
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
        title={translate({
          id: "homepage.section.install.title",
          description: "Homepage Installs section title",
          message: "Install everywhere",
        })}
        subtitle={translate({
          id: "homepage.section.install.subtitle",
          description: "Homepage Installs section subtitle",
          message: "Some of our guides to help you to install.",
        })}
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

          <Button
            text={translate({
              id: "homepage.section.install.button",
              description: "Homepage Install section button",
              message: "Getting started",
            })}
            href="#"
          />
        </div>
      </Section>

      <Section
        title={translate({
          id: "homepage.section.community.title",
          description: "Homepage Community secion button",
          message: "Do the Evolution",
        })}
      >
        <div className={styles.sectionJoinUs}>
          <ImageCard
            image={<img src="/img/evolution.svg" alt="Do the Evolution" />}
          >
            <p>
              <Translate
                id="homepage.section.community.text.1"
                description="Homepage Community section text"
              >
                Together we can build a better future. Join us and help us to
                develop the future of the e-learning application.
              </Translate>
            </p>
            <p>
              <Translate
                id="homepage.section.community.text.2"
                description="Homepage Community section text"
              >
                We are looking for great minds that want to help us to develop
                the best experience for everybody. Join us as a developer,
                designer, content creator, student, or educator.
              </Translate>
            </p>
            <Button
              text={translate({
                id: "homepage.section.community.button",
                description: "Homepage Community section button",
                message: "Join the community",
              })}
              href="#"
            />
          </ImageCard>
        </div>
      </Section>
    </Layout>
  );
}

export default Home;
