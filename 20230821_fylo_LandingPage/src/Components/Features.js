import { Container, Row } from "react-bootstrap";
import { FeatureItem } from "./FeatureItem";

export const Features = ({ features }) => {
  return (
    <>
      <section className="features mt-625" id="features">
        <Container>
          <Row className="justify-content-center">
            {features.map((feature) => {
              return <FeatureItem {...feature} key={feature.id} />;
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};
