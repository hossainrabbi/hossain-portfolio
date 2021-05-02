import React from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <section id="contact">
            <Container>
                <div className="main-title">
                    <h2 className="text-center">Get In Touch</h2>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)} data-aos="zoom-in">
                    <Form.Row className="mb-3">
                        <Col sm={6} className="mb-sm-0 mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Name*"
                                required
                                {...register('name')}
                            />
                        </Col>
                        <Col sm={6}>
                            <Form.Control
                                type="email"
                                placeholder="Email*"
                                required
                                {...register('email')}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Subject*"
                            required
                            {...register('subject')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Message*"
                            required
                            {...register('message')}
                        />
                    </Form.Group>
                    <div className="text-center">
                        <button className="btn custom-btn" type="submit">
                            Submit
                        </button>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default Contact;
