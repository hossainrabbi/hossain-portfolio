import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Bounce } from 'react-reveal';

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
                () => {
                    Swal.fire(
                        'Thanks for sending the mail!',
                        'I will respond as soon as possible!',
                        'success'
                    );
                    e.target.reset();
                },
                () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                }
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
                        <Form onSubmit={sendEmail}>
                            <Form.Row className="mb-3">
                                <Col sm={6} className="mb-sm-0 mb-3">
                                    <Bounce left>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name*"
                                            name="name"
                                            required
                                        />
                                    </Bounce>
                                </Col>
                                <Col sm={6}>
                                    <Bounce right>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email*"
                                            name="email"
                                            required
                                        />
                                    </Bounce>
                                </Col>
                            </Form.Row>
                            <Form.Group>
                                <Bounce top>
                                    <Form.Control
                                        type="text"
                                        placeholder="Subject*"
                                        name="subject"
                                        required
                                    />
                                </Bounce>
                            </Form.Group>
                            <Form.Group>
                                <Bounce bottom>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Message*"
                                        name="message"
                                        required
                                    />
                                </Bounce>
                            </Form.Group>
                            <div className="text-center">
                                <Bounce>
                                    <button
                                        className="btn custom-btn"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </Bounce>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
