import { Row, Col } from "react-bootstrap";

export const FeatureItem = ({ img, title, description }) => {
  return (
    <Col xs={12} md={6}>
      <Row className="feature flex-column mb-625">
        <Col sm={12}>
          <img
            src={require("../images/" + img)}
            alt="featureImg"
            className="feature__img d-inline-block"
          />
        </Col>
        <Col sm={12}>
          <h2 className="feature__title title">{title}</h2>
        </Col>
        <Col sm={12}>
          <p className="feature__description description">{description}</p>
        </Col>
      </Row>
    </Col>
  );
};
