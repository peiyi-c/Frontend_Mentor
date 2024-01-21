import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import logo from "../images/logo.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar className={scrolled ? "scrolled" : ""}>
        <Container expand="md" fluid>
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="d-none d-md-flex justify-content-end">
            <Nav.Link
              href="#features"
              className={
                activeLink === "feature"
                  ? "active navbar-link d-inline-block"
                  : "navbar-link d-inline-block"
              }
              onClick={() => onUpdateActiveLink("feature")}
            >
              <span>Features</span>
            </Nav.Link>
            <Nav.Link
              href="#works"
              className={
                activeLink === "team"
                  ? "active navbar-link d-inline-block"
                  : "navbar-link d-inline-block"
              }
              onClick={() => onUpdateActiveLink("team")}
            >
              <span>Teams</span>
            </Nav.Link>
            <Nav.Link
              href="#signup"
              className={
                activeLink === "signin"
                  ? "active navbar-link d-inline-block"
                  : "navbar-link d-inline-block"
              }
              onClick={() => onUpdateActiveLink("signin")}
            >
              <span>Sign Up</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
