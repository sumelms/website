import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Section from "../components/Section";
import Card from "../components/Card";
import ReactRotatingText from "react-rotating-text";

const reasons = [
  {
    title: "Open Source",
    content:
      "It is Open Source and free to use. Sumé LMS is licensed by Apache 2.0. It means that you can download, host and use.",
    icon: "",
  },
  {
    title: "People",
    content:
      "Designed by people to people, to understand his needs and desires for a better experience.",
    icon: "",
  },
  {
    title: "Modern",
    content:
      "Developed and tested with modern frameworks and libraries like React and Laravel.",
    icon: "",
  },
  {
    title: "Distributed",
    content:
      "The application structure allows you to design and use microservices.",
    icon: "",
  },
  {
    title: "Community",
    content: "All knowledge developed by people must be owned by people.",
    icon: "",
  },
  {
    title: "Compatible",
    content: "SCORM and xAPI supported. But you should try to use Guaraná.",
    icon: "",
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
      <div className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>
          Education that envolves to be <br />
          <ReactRotatingText
            items={["adaptative!", "open source!", "for all!"]}
          />
        </h1>

        <h2 className={styles.heroSubtitle}>
          Education that envolved, like knowledge and people.
        </h2>

        <div className={styles.heroButtons}>
          <a href="#" className={styles.heroButton}>
            View on GitHub
          </a>
          <a href="#" className={styles.heroButton}>
            Download
          </a>
        </div>
      </div>

      <Section title="Why Sumé LMS?">
        <div className={styles.cardList}>
          {reasons.map((reason, index) => (
            <Card key={index} {...reason} />
          ))}
        </div>
      </Section>

      <Section>
        <div>
          <div>
            <span>Student Space</span>
            <h2>Your space to learn</h2>
            <p>
              Tollere odium autem in nostra potestate sint, ab omnibus et contra
              naturam transferre in nobis. Sed interim toto desiderio
              supprimunt: si vis Tollere odium autem in nostra potestate sint,
              ab omnibus et contra naturam{" "}
            </p>
          </div>
          <div>IMAGE</div>
        </div>

        <div>
          <div>
            <span>Instructor Space</span>
            <h2>Your space to learn</h2>
            <p>
              Tollere odium autem in nostra potestate sint, ab omnibus et contra
              naturam transferre in nobis. Sed interim toto desiderio
              supprimunt: si vis Tollere odium autem in nostra potestate sint,
              ab omnibus et contra naturam{" "}
            </p>
          </div>
          <div>IMAGE</div>
        </div>

        <div>
          <div>
            <span>Community</span>
            <h2>Interact with the community</h2>
            <p>
              Tollere odium autem in nostra potestate sint, ab omnibus et contra
              naturam transferre in nobis. Sed interim toto desiderio
              supprimunt: si vis Tollere odium autem in nostra potestate sint,
              ab omnibus et contra naturam{" "}
            </p>
          </div>
          <div>IMAGE</div>
        </div>
      </Section>
    </Layout>
  );
}

export default Home;
