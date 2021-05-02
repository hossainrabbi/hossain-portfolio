import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { social } from '../../data/social.data';
import SocialLink from '../SocialLink/SocialLink';
import hossain from '../../images/hossainRabbi.jpg';
import './About.css';
import { address1, address2 } from '../../data/address.data';
import Address from './Address';

const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <img
                            src={hossain}
                            alt="hossain"
                            className="img-fluid img-thumbnail"
                        />
                    </Col>
                    <Col md={7}>
                        <div className="main-title">
                            <h2>About Me</h2>
                        </div>
                        <div className="about-content">
                            <p className="mt-4">
                                A self-motivated, energetic, and passionate
                                professional web Development with valuable
                                experience in HTML, CSS, JavaScript and React
                                JS.
                            </p>
                            <p>
                                I enjoy turning complex problems into simple,
                                beautiful, and intuitive interface designs.
                            </p>
                            <Row>
                                <Col sm={6}>
                                    {address1.map((address) => (
                                        <Address
                                            {...address}
                                            key={address.id}
                                        />
                                    ))}
                                </Col>
                                <Col sm={6}>
                                    {address2.map((address) => (
                                        <Address
                                            {...address}
                                            key={address.id}
                                        />
                                    ))}
                                </Col>
                                <Col>
                                    <Address
                                        title="E-mail"
                                        name="hossainrabbi259@gmail.com"
                                    />
                                </Col>
                            </Row>
                            <div className="mt-3">
                                <a href="a" className="btn custom-btn">
                                    Get In Touch
                                </a>
                                <a href="a" className="btn custom-btn">
                                    Get In Touch
                                </a>
                            </div>
                            <ul className="social-icon mt-3">
                                {social.map((item) => (
                                    <SocialLink {...item} key={item.id} />
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;