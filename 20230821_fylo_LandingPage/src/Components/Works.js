import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import workImg from "../images/illustration-stay-productive.png";

export const Works = () => {
  return (
    <section className="works mt-625" id="works">
      <Container>
        <Row>
          <Col sm={12} md={6} className="justify-content-center">
            <img className="works__img" src={workImg} alt="intro" />
          </Col>
          <Col sm={12} md={6} className="works__text">
            <Row className="d-flex flex-column justify-content-center">
              <Col className="works__title mt-250 text-lg-start">
                <h1 className="title">Stay productive, wherever you are</h1>
              </Col>
              <Col className="works__description text-start">
                <p className="description">
                  Never let location be an issue when accessing your files. Fylo
                  has you covered for all of your file storage needs.
                </p>
                <p className="description">
                  Securely share files and folders with friends, family and
                  colleagues for live collaboration. No email attachments
                  required.
                </p>
              </Col>
              <Col className="works__cta text-start">
                <a
                  href="www.google.com"
                  className="works__cta__link description"
                >
                  See how Fylo works
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
