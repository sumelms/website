import React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

import Page from "../../components/Page";
import ProjectCard from "../../components/ProjectCard";

import { Button } from "../../styles/buttons";
import {
  Title,
  Subtitle,
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

  const ProjectList = () =>
    projects.map((project) => (
      <Col xs={12} md={3} key={() => project.id}>
        <ProjectCard item={project} />
      </Col>
    ));

  return (
    <Page>
      <WelcomeSection>
        <Grid>
          <Row middle={"xs"} between={"xs"}>
            <Col xs={12} md={3}>
              <h1>Olá!</h1>
              <h2>Nós somos a Sumé.</h2>
              <p>
                Nosso negócio é unir conhecimento e tecnologia para todos. De
                forma simples e acessível.
              </p>
            </Col>
            <Col xs="12" md={8}>
              <p className="strong">
                Nós acreditamos no poder da educação e da tecnologia em
                transformar o mundo de forma posivita.
              </p>
              <p>
                Por acreditamos que a educação e a tecnologia são fatores
                cruciais para mudar o mundo, a Sumé une forças com profissionais
                da educação e tecnologia, para garantir o direito de todos ao
                conhecimento.
              </p>
              <p>
                Nosso modelo de desenvolvimento aberto (open-source) e
                transparente é o núcleo de tudo que fazemos.
              </p>
            </Col>
          </Row>
        </Grid>
      </WelcomeSection>

      <VideoSection>
        <Grid>
          <Row>
            <Col xs={12}>VIDEO SECTION</Col>
          </Row>
        </Grid>
      </VideoSection>

      <AboutSection
        title={["Um pouco mais ", <strong>sobre a Sumé</strong>]}
        description="Educação e tecnologia, aberta, transparent e acessível à todos."
      >
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              ABOUT CHILDREN
            </Col>
            <Col xs={12} md={6}>
              MORE ABOUT
            </Col>
          </Row>
        </Grid>
      </AboutSection>

      <PartnersSection>
        <Grid>
          <Row>
            <Col xs={12}>
              <Title>
                <strong>Quem nos ajuda</strong> a construír o futuro
                <Subtitle>
                  Assim como nós eles acreditam no valor da educação.
                </Subtitle>
              </Title>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button>+ mais parceiros</Button>
            </Col>
          </Row>
        </Grid>
      </PartnersSection>

      <ProjectsSection>
        <Grid>
          <Row>
            <Col xs={12}>
              <Title>
                <strong>Projetos</strong> que constroem o sonho
              </Title>
              <Subtitle>
                Nossos projetos são abertos e livres, assim como o conhecimento
                deve ser.
              </Subtitle>
            </Col>
          </Row>
          <Row between={"xs"}>
            <ProjectList />
          </Row>
        </Grid>
      </ProjectsSection>

      <ServicesSection>
        <Grid>
          <Row>
            <Col xs={12}>
              <Title>
                O que nós <strong>construímos?</strong>
              </Title>
              <Subtitle>
                Você pode contar com nossa equipe para ajudá-lo.
              </Subtitle>
            </Col>
          </Row>
          <Row>
            <Col>CONTACT CHILDREN</Col>
          </Row>
        </Grid>
      </ServicesSection>

      <ContactSection>
        <Grid>
          <Row>
            <Col xs={12}>
              <Title>
                <strong>Fale com a gente</strong>
              </Title>
              <Subtitle>
                Você gostaria de falar com a nossa equipe? Nós estamos aqui para
                responder suas perguntas e auxiliar da melhor forma possível.
              </Subtitle>
            </Col>
          </Row>
          <Row>
            <Col>CONTACT CHILDREN</Col>
          </Row>
        </Grid>
      </ContactSection>
    </Page>
  );
}

export default Home;
