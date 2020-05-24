import React from "react";
import { Link } from "react-router-dom";

import logoSrc from "../../assets/images/logo.svg";

import { Container, Logo, Navigation } from "./styles";

function Header() {
  return (
    <Container>
      <Logo src={logoSrc} />
      <Navigation>
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/services">Serviços</Link>
        <Link to="/community">Comunidade</Link>
        <Link to="/blog">Blog</Link>
      </Navigation>
    </Container>
  );
}

export default Header;
