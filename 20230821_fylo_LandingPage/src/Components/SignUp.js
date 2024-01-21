import { useState } from "react";
import { Container, Form } from "react-bootstrap";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const emailValidation = (e) => {
    const validationPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let emailValue = e.target.value;
    setEmail(emailValue);
    if (emailValue.match(validationPattern)) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  return (
    <section className="signup" id="signup">
      <Form className="w-100 mx-0">
        <Container className="d-flex flex-column align-items-center pt-250 pb-200">
          <h2 className="signup__title title mb-125">Get early access today</h2>
          <div className="signup__description">
            <p className="signup__description description mb-200">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>

          <Form.Group
            className="signup__control d-flex flex-column align-items-center flex-lg-row gap-lg-3 align-items-lg-start"
            controlId="formBasicEmail"
          >
            <div className="signup__input">
              <Form.Control
                type="email"
                value={email}
                placeholder="example@example.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                autocapitalize="none"
                autocorrect="off"
                onChange={emailValidation}
              />
              <p
                className={
                  email.length === 0
                    ? "signup__message"
                    : message
                    ? "signup__message signup__message--valid"
                    : "signup__message signup__message--invalid"
                }
              >
                {email.length === 0
                  ? "Email address"
                  : message
                  ? "valid email address!"
                  : "Please enter a valid email address"}
              </p>
            </div>

            <button className="signup__button w-lg-100" type="submit">
              Get Started For Free
            </button>
          </Form.Group>
        </Container>
      </Form>
    </section>
  );
};
