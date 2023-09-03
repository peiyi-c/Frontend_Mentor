import { Col } from "react-bootstrap";
export const TestimonialItem = ({ description, profile, name, position }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="testimonial__item text-start">
        <p className="testimonial__item__description description">
          {description}
        </p>

        <div className="testimonial__item__bottom d-flex mp-200">
          <img
            className="testimonial__item__img"
            src={require("../images/" + profile)}
            alt="profileImg"
          />
          <div className="testimonial__item__profile d-flex flex-column justify-content-center">
            <h5 className="testimonial__item__name">{name}</h5>
            <span className="testimonial__item__position">{position}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};
