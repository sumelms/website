import React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

import { Container, FooterInfo } from "./styles";

function Footer() {
  return (
    <Container>
      <Grid>
        <Row between={"xs"} middle={"xs"}>
          <Col xs={3}>Sumé logo</Col>
          <Col xs={3}>
            <h5>Desenvolvedores</h5>
            <a href="#">Guaraná API</a>
            <a href="#"></a>
          </Col>
          <Col xs={3}>
            <h5>Educadores</h5>
            <a href="#">Manual de criação</a>
            <a href="#">Cursos</a>
          </Col>
          <Col xs={3}>
            <h5>Empresa</h5>
            <a href="#">Sobre nós</a>
            <a href="#">Fale conosco</a>
            <a href="#">Carreiras</a>
          </Col>
        </Row>
      </Grid>
      <FooterInfo>
        <Grid>
          <Row between={"xs"}>
            <Col>© 2020 Sumé LMS - Todos os direitos reservados.</Col>
            <Col>social icons</Col>
          </Row>
        </Grid>
      </FooterInfo>
    </Container>
  );
}

export default Footer;
