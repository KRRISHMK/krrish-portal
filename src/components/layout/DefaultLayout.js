import React, { useState, useEffect } from "react";
import { Container } from "rsuite";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const DefaultLayout = ({ component: Component }) => {
  // Menu state
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Change body bg color on menu toggle
    if (isMenuOpen) {
      document.body.classList.toggle("body-overlay");
    } else {
      document.body.classList.remove("body-overlay");
    }
  }, [isMenuOpen]);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <Container>
        <Component />
      </Container>
      <Footer />
    </>
  );
};

export default DefaultLayout;
