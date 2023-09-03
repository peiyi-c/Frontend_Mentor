import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import heroImg from "../images/illustration-intro.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Hero = () => {
  const toRotate = ["anywhere.", "anytime."];
  const period = 800;
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((preDelta) => preDelta / 1.5); //speed up deleting
    }
    //* update finished *//
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // start deleting
      setDelta(period); // set ticking speed (ticker delay)
    } //* deleting finished *//
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false); // stop deleting

      if (loopNum === toRotate.length - 1) {
        // jump to next text element
        setLoopNum(0);
      } else {
        setLoopNum(loopNum + 1);
      }
      setDelta(period / 4); // set ticking speed (ticker delay)
    }
  };

  return (
    <section className="hero" id="hero">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} lg={7} className="hero__img">
            <img src={heroImg} alt="intro" />
          </Col>

          <Col sm={11} lg={7} className="hero__title d-inline-block">
            <h1 className="title">
              {`All your files in one secure location, accessible `}
              <span>{text}</span>
              <span className="blink">|</span>
            </h1>
          </Col>

          <Col sm={10} lg={8} className="hero__description description">
            <span>
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </span>
          </Col>

          <TrackVisibility>
            {({ isVisible }) => (
              <Col
                sm={12}
                className={
                  isVisible
                    ? "animate__animated animate__fadeInDown hero__cta"
                    : " hero__cta"
                }
              >
                <button className="button">
                  <span>Get Started</span>
                </button>
              </Col>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
};
