import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Section from "../components/Section";
import Card from "../components/Card";

const reasons = [
  { title: "Reason 1", content: "Content for reason 1", icon: "" },
  { title: "Reason 2", content: "Content for reason 2", icon: "" },
  { title: "Reason 3", content: "Content for reason 3", icon: "" },
  { title: "Reason 4", content: "Content for reason 4", icon: "" },
  { title: "Reason 5", content: "Content for reason 5", icon: "" },
  { title: "Reason 6", content: "Content for reason 6", icon: "" },
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
        <h1 className={styles.heroTitle}>Education that envolves to be </h1>
        <h1 className={styles.heroTitle}>Smart!</h1>

        <h2 className={styles.heroSubtitle}>
          Education that envolved, like knowledge and people.
        </h2>

        <div className={styles.buttons}>
          <a href="#" className={styles.heroButton}>
            <span>View on GitHub</span>
          </a>
          <a href="#" className={styles.heroButton}>
            <span>Download</span>
          </a>
        </div>
      </div>
      <Section title="Why Sumé LMS?">
        {reasons.map((reason) => (
          <Card {...reason} />
        ))}
      </Section>
    </Layout>
  );
}

export default Home;
