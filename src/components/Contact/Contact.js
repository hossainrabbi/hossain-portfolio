import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Bounce, Slide } from 'react-reveal';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_ote7ccp',
        e.target,
        'user_XIYdSj5upNfiBGNAQ59SN'
      )
      .then(
        () => {},
        () => {}
      );
  }

  return (
    <section id="contact">
      <Container>
        <div className="main-title">
          <h2 className="text-center">
            <Bounce bottom cascade>
              Get In Touch
            </Bounce>
          </h2>
        </div>
        <Row className="justify-content-center">
          <Col md={9}>
            <Slide bottom>
              <Form onSubmit={sendEmail}>
                <Form.Row className="mb-3">
                  <Col sm={6} className="mb-sm-0 mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Name*"
                      name="name"
                      required
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      type="email"
                      placeholder="Email*"
                      name="email"
                      required
                    />
                  </Col>
                </Form.Row>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Subject*"
                    name="subject"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message*"
                    name="message"
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <button className="btn custom-btn" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
