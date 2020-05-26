import React from "react";
import { NavLink } from "react-router-dom";

import logoSrc from "../../assets/images/logo.svg";

import { Container, Logo, Navigation } from "./styles";

function Header() {
  return (
    <Container>
      <Logo src={logoSrc} />
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
    </Container>
  );
}

export default Header;
