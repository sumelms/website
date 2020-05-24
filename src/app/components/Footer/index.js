import React from "react";

import { Container, Row, Col } from "./styles";

function Footer() {
  return (
    <Container>
      <Row>
        <Col>Sumé logo</Col>
        <Col>
          <h5>Desenvolvedores</h5>
          <a href="#">Guaraná API</a>
          <a href="#"></a>
        </Col>
        <Col>
          <h5>Educadores</h5>
          <a href="#">Manual de criação</a>
          <a href="#">Cursos</a>
        </Col>
        <Col>
          <h5>Empresa</h5>
          <a href="#">Sobre nós</a>
          <a href="#">Fale conosco</a>
          <a href="#">Carreiras</a>
        </Col>
      </Row>
      <Row className="copyright">
        <Col>© 2020 Sumé LMS - Todos os direitos reservados.</Col>
        <Col>social icons</Col>
      </Row>
    </Container>
  );
}

export default Footer;
