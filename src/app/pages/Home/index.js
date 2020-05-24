import React from "react";

import Page from "../../components/Page";
import ProjectCard from "../../components/ProjectCard";

import { Button } from "../../styles/buttons";
import {
  WelcomeSection,
  VideoSection,
  AboutSection,
  PartnersSection,
  ProjectsSection,
  ServicesSection,
  ContactSection,
} from "./styles";

function Home() {
  const projects = [
    {
      id: 1,
      image: "",
      title: "Guaraná API",
      description: "Framework para criação de treinamentos.",
    },
    {
      id: 2,
      image: "",
      title: "Guaraná API",
      description: "Framework para criação de treinamentos.",
    },
    {
      id: 3,
      image: "",
      title: "Guaraná API",
      description: "Framework para criação de treinamentos.",
    },
    {
      id: 4,
      image: "",
      title: "Guaraná API",
      description: "Framework para criação de treinamentos.",
    },
  ];

  const ProjectList = () => (
    <div>
      {projects.map((project) => (
        <ProjectCard key={() => project.id} item={project} />
      ))}
    </div>
  );

  return (
    <Page>
      <WelcomeSection>
        <div>
          <h1>Olá!</h1>
          <h2>Nós somos a Sumé.</h2>
          <p>
            Nosso negócio é unir conhecimento e tecnologia para todos. De forma
            simples e acessível.
          </p>
        </div>
        <div>
          <p className="strong">
            Nós acreditamos no poder da educação e da tecnologia em transformar
            o mundo de forma posivita.
          </p>
          <p>
            Por acreditamos que a educação e a tecnologia são fatores cruciais
            para mudar o mundo, a Sumé une forças com profissionais da educação
            e tecnologia, para garantir o direito de todos ao conhecimento.
          </p>
          <p>
            Nosso modelo de desenvolvimento aberto (open-source) e transparente
            é o núcleo de tudo que fazemos.
          </p>
        </div>
      </WelcomeSection>

      <VideoSection />

      <AboutSection
        title="Um pouco mais sobre a Sumé"
        description="Educação e tecnologia, aberta, transparent e acessível à todos."
      >
        ABOUT CHILDREN
      </AboutSection>

      <PartnersSection
        title="Quem nos ajuda a construír o futuro"
        description="Assim como nós eles acreditam no valor da educação."
      >
        <Button>+ mais parceiros</Button>
      </PartnersSection>

      <ProjectsSection
        title={"Projectos que constroem o sonho"}
        description="Nossos projetos são abertos e livres, assim como o conhecimento deve ser."
      >
        <ProjectList />
      </ProjectsSection>

      <ServicesSection
        title="O que nós construímos?"
        description="Você pode contar com nossa equipe para ajudá-lo."
      >
        SERVICES CHILDREN
      </ServicesSection>

      <ContactSection
        title="Fale com a gente"
        description="Você gostaria de falar com a nossa equipe? Nós estamos aqui para responder suas perguntas e auxiliar da melhor forma possível."
      >
        CONTACT CHILDREN
      </ContactSection>
    </Page>
  );
}

export default Home;
