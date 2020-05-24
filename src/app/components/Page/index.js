import React from "react";

import Header from "../Header";
import Footer from "../Footer";

// import { Container } from './styles';

function Page({ children }) {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}

export default Page;
