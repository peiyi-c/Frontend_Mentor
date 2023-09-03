import { Container, Row } from "react-bootstrap";

import quotes from "../images/bg-quotes.png";
import { TestimonialItem } from "./TestimonialItem";

export const Testimonials = ({ testimonials }) => {
  return (
    <section className="testimonials mt-625" id="testimonials">
      <Container>
        <img className="testimonial__quote" src={quotes} alt="quote" />
        <Row className="testimonial__items justify-content-space-around">
          {testimonials.map((testimonial) => {
            return <TestimonialItem {...testimonial} key={testimonial.id} />;
          })}
        </Row>
      </Container>
    </section>
  );
};
