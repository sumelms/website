import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate, { translate } from "@docusaurus/Translate";

import {
  FiBookOpen,
  FiUser,
  FiPieChart,
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

const words = [
  translate({
    id: "homepage.banner.words.1",
    description: "First animated banner word.",
    message: "open.",
  }),
  translate({
    id: "homepage.banner.words.2",
    description: "Second animated banner word.",
    message: "adaptative.",
  }),
  translate({
    id: "homepage.banner.words.3",
    description: "Third animated banner word.",
    message: "inclusive.",
  }),
  translate({
    id: "homepage.banner.words.4",
    description: "Fourth animated banner word.",
    message: "yours!",
  }),
];

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
        "Licensed by Apache 2.0, the open source is free to download, host and use by everyone.",
    }),
    icon: <FiBookOpen size={24} />,
  },
  {
    title: translate({
      id: "reasons.item-list.2.title",
      description: "Reason list item title",
      message: "Made for people",
    }),
    content: translate({
      id: "reasons.item-list.2.content",
      description: "Reason list item content",
      message:
        "Made to understand the needs of educators and learners and improve their experiences.",
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
        "Developed with Go and React, it is ready to be used with Kubernetes and run in containers.",
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
        "Its microservice architecture ensures high availability and scalability.",
    }),
    icon: <FiGlobe size={24} />,
  },
  {
    title: translate({
      id: "reasons.item-list.5.title",
      description: "Reason list item title",
      message: "Data-oriented",
    }),
    content: translate({
      id: "reasons.item-list.5.content",
      description: "Reason list item content",
      message: "It provides evidence on the performance of the content and applied teaching method, allowing to identify and correct possible deviations in the learning process.",
    }),
    icon: <FiPieChart size={24} />,
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
        "Support for SCORM and xAPI, which facilitates migration, and also for our own format, Guaraná.",
    }),
    icon: <FiCheck size={24} />,
  },
];

const features = [
  {
    topTitle: translate({
      id: "features.item-list.1.toptitle",
      description: "Feature list item toptitle",
      message: "Educator Space",
    }),
    title: translate({
      id: "features.item-list.1.title",
      description: "Feature list item title",
      message: "A space to teach",
    }),
    description: translate({
      id: "features.item-list.1.description",
      description: "Feature list item description",
      message:
        "Within Sumé, the educator has control of the content in his hands. By using the tools available on the platform, in addition to assembling and making the content available, the educator can obtain statistics on the performance and progress of their students, classes and courses. Through automated analysis, he can find ways to optimize content and teach classes, adapting them to the needs of each student.",
    }),
    image: <img src="img/features/educator-space.svg" alt="Educator Space Image" />,
  },
  {
    topTitle: translate({
      id: "features.item-list.2.toptitle",
      description: "Feature list item toptitle",
      message: "Student Space",
    }),
    title: translate({
      id: "features.item-list.2.title",
      description: "Feature list item title",
      message: "A space to learn",
    }),
    description: translate({
      id: "features.item-list.2.description",
      description: "Feature list item description",
      message:
        "Here, the student also has the autonomy to customize the way they want to access the content in which they are interested. And while he learns, the platform learns from him and adapts to help improve his performance. The Student Lounge is perfect for improving the way a student learns as it monitors their progress as they interact with their educators and other students.",
    }),
    image: <img src="img/features/student-space.svg" alt="Student Space Image" />,
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
      message: "For the public or private sector",
    }),
    description: translate({
      id: "features.item-list.3.description",
      description: "Feature list item description",
      message:
        "The Sumé LMS can still be used as a corporate knowledge distribution platform. With it, it is possible to find different ways to teach, learn, share and collaborate within public and private organizations. The platform allows you to manage multiple learning spaces and helps servers and employees on their journey through knowledge.",
    }),
    image: <img src="img/features/organization-space.svg" alt="Organization Space Image" />,
  },
];

const installs = [
  { 
    url: "#", 
    image: "img/installs/selfhosted.svg", 
    title: translate({
      id: "homepage.section.install.items.self-hosted",
      description: "Self hosted installation item",
      message: "Self hosted",
    })
  },
  { 
    url: "#", 
    image: "img/installs/azure.svg", 
    title: translate({
      id: "homepage.section.install.items.microsoft-azure",
      description: "Microsoft Azure installation item",
      message: "Microsoft Azure"
    })
  },
  { 
    url: "#",
    image: "img/installs/openshift.svg",
    title: translate({
      id: "homepage.section.install.items.openshift",
      description: "Openshift installation item",
      message: "Red Hat Openshift"
    })
  },
  { 
    url: "#",
    image: "img/installs/amazon.svg",
    title: translate({
      id: "homepage.section.install.items.aws",
      description: "Amazon installation item",
      message: "Amazon Cloud"
    })
  },
];


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig: {customFields = {}, tagline} = {}} = context;

  return (
    <Layout
      title={tagline}
      description={customFields.description}
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
              "A fast and modern online education platform, designed for the exchange of knowledge between people.",
          })}
          image="img/banner-image.svg"
          words={words}
        >          
          <Button
            text={translate({
              id: "homepage.banner.button-more",
              description: "Homepage banner button to more",
              message: "Learn more",
            })}
            href="/docs/"
          />
          <Button
            text={translate({
              id: "homepage.banner.button-github",
              description: "Homepage banner button to visit github",
              message: "View on Github",
            })}
            href="https://github.com/sumelms"
            target="_blank"
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
          id: "sume.edu.section.title",
          description: "Edu sumé documentation title",
          message: "Sumé edu",
        })}
        subtitle={translate({
          id: "sume.edu.section.subtitle",
          description: "Homepage Installs section subtitle",
          message: "A tool to support the education",
        })}
        centered
      >
        <div className={styles.sectionSumeEdu}>
          <ImageCard
            image={<img src="img/sume_edu.svg" alt="Sume Edu" />}
            reverse
          >
          
          <p>
            <Translate
              id="sume.edu.section.text.2"
              description="Sume Edu section text"
            >
              To ensure educators and students a broad and detailed understanding of what Sumé and the Sumé LMS are and how they can assist in the development and implementation of virtual classes, we created Sumé Edu (Educator's Manual). Its objective is to help and help educators to remodel and adapt what is taught in the physical classroom to the virtual classroom, trying, in all aspects, not to lose the quality necessary for the construction of knowledge.
            </Translate>
          </p>
          <p>
            <Translate
              id="sume.edu.section.text.3"
              description="Sume Edu section text"
            >
              Like the entire Sumé platform, the manual is also a product of collective construction and is open to everyone's collaboration. To follow the content development and understand how to help in this process, access the manual and check it out!
            </Translate>
          </p>
          
          </ImageCard>
        </div>

        <Button
          text={translate({
            id: "sume.edu.section.button",
            description: "Sume Edu section button",
            message: "Visit project",
          })}
          href="https://edu.sumelms.com"
          target="_blank"
        />

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
        centered
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
            href="/docs/install"
          />
        </div>
      </Section>

      <Section
        title={translate({
          id: "homepage.section.community.title",
          description: "Homepage Community section title",
          message: "Join the Evolution",
        })}
        subtitle={translate({
          id: "homepage.section.community.subtitle",
          description: "Homepage Community section subtitle",
          message: "Together we can build a better future"
        })}
      >
        <div className={styles.sectionJoinUs}>
          <ImageCard
            image={<img src="img/evolution.svg" alt="Join the Evolution" />}
          >
            <p>
              <Translate
                id="homepage.section.community.text.2"
                description="Homepage Community section text"
              >
                Education has always been and must continue to be a collective construction and an exchange of knowledge. And the arrival of technology only facilitated this process. So, as much as the first step of the Sumé LMS has been taken by us, we invite you to join us in developing the future of online learning technology.
              </Translate>
            </p>
            <p>
              <Translate
                id="homepage.section.community.text.3"
                description="Homepage Community section text"
              >
                We are looking for great minds who are willing to help us with developing strategies and tools to bring the best experience to everyone involved. Join our team of developers, designers, content creators, educators or students.
              </Translate>
            </p>
            <Button
              text={translate({
                id: "homepage.section.community.button",
                description: "Homepage Community section button",
                message: "Join the community",
              })}
              href="https://discord.gg/Yx98nwK"
              target="_blank"
            />
          </ImageCard>
        </div>
      </Section>
    </Layout>
  );
}

export default Home;
