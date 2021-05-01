import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { skills } from '../../data/skills.data';
import { social } from '../../data/social.data';
import SocialLink from '../SocialLink/SocialLink';
import Skill from './Skill';
import './About.css';

const About = () => {
    return (
        <section className="about mt-5">
            <Container>
                <div className="main-title">
                    <h2 className="text-center">About Me</h2>
                </div>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="about-content">
                            <h2>
                                <span>Hi There! I'm</span> Hossain Rabbi
                            </h2>
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
                            <ul className="social-icon mt-3">
                                {social.map((item) => (
                                    <SocialLink {...item} key={item.id} />
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="skill-box">
                            {skills.map((skill) => (
                                <Skill {...skill} key={skill.id} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
