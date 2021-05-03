import { Col, Container, Row } from 'react-bootstrap';
import { Fade, Bounce } from 'react-reveal';
import { address1, address2 } from '../../data/address.data';
import Address from './Address';
import hossain from '../../images/hossainRabbi.jpg';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <Fade left>
                            <img
                                src={hossain}
                                alt="hossain"
                                className="img-fluid img-thumbnail"
                            />
                        </Fade>
                    </Col>
                    <Col md={7}>
                        <div className="main-title">
                            <h2>
                                <Bounce top cascade>
                                    About Me
                                </Bounce>
                            </h2>
                        </div>
                        <div className="about-content">
                            <Fade right>
                                <p className="mt-4">
                                    A self-motivated, energetic, and passionate
                                    professional web Development with valuable
                                    experience in HTML, CSS, JavaScript and
                                    React JS.
                                </p>
                                <p>
                                    I enjoy turning complex problems into
                                    simple, beautiful, and intuitive interface
                                    designs.
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
                                <div className="mt-4">
                                    <a
                                        href="https://drive.google.com/uc?export=download&id=1fVo3bM-KbzamcjqNei7nmERnqkjfTRV0"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn custom-btn"
                                    >
                                        Download Resume
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
