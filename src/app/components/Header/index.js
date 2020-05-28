import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

import logoSrc from "../../assets/images/logo.svg";

import { Container, Logo, Navigation } from "./styles";

function Header() {
  return (
    <Container>
      <Grid>
        <Row between={"xs"} middle={"xs"} around={"xs"}>
          <Col xs={4}>
            <Logo src={logoSrc} />
          </Col>
          <Col>
            <Navigation>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
              <NavLink activeClassName="active" to="/about">
                Sobre
              </NavLink>
              <NavLink activeClassName="active" to="/projects">
                Projetos
              </NavLink>
              <NavLink activeClassName="active" to="/services">
                Serviços
              </NavLink>
              <NavLink activeClassName="active" to="/community">
                Comunidade
              </NavLink>
              <NavLink activeClassName="active" to="/blog">
                Blog
              </NavLink>
            </Navigation>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default Header;
