import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Community from "../pages/Community";
import Blog from "../pages/Blog";

// import { Container } from './styles';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
