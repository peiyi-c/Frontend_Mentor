import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer id="footer" className="footer mt-150">
      <Container className="px-lg-0">
        <Row className="footer__logo my-150 text-start" sm={12}>
          <Col className="mt-500 mb-250">
            <img src={logo} alt="logo" />
          </Col>
        </Row>

        <Row className="footer__text text-start">
          <Col
            sm={12}
            lg={4}
            className="footer__text__address my-sm-250 my-md-0 description d-flex align-items-baseline"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#ffffff" }}
            />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </Col>
          <Col
            sm={12}
            lg={3}
            className="footer__text__contact description d-flex-inline flex-column align-items-baseline"
          >
            <Col className="mb-150">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ color: "#ffffff" }}
              />
              <a href="tel:15431234567">+1-543-123-4567</a>
            </Col>

            <Col>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
              <a href="mailto:example@fylo.com">example@fylo.com</a>
            </Col>
          </Col>

          <Col sm={12} lg={2} className="footer__text__links mt-sm-600 mt-md-0">
            <a href="www.goole.com">About Us</a>
            <br />
            <a href="www.goole.com">Jobs</a>
            <br />
            <a href="www.goole.com">Press</a>
            <br />
            <a href="www.goole.com">Blog</a>
            <br />
          </Col>
          <Col sm={12} lg={2} className="footer__text__links mt-sm-300 mt-md-0">
            <a href="www.goole.com">Contact Us</a>
            <br />
            <a href="www.goole.com">Terms</a>
            <br />
            <a href="www.goole.com">Privacy</a>
            <br />
          </Col>
          <Col
            sm={12}
            lg={1}
            className="footer__text__social d-flex justify-content-center mt-sm-200 mt-md-0"
          >
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
          </Col>
        </Row>

        <Row>
          <p className="footer__attribution mt-300">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://github.com/peiyi-c"> Pei-Yi Chen</a>.
          </p>
        </Row>
      </Container>
    </footer>
  );
};
