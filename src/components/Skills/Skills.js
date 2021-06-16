import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import { skills1, skills2 } from '../../data/skills.data';
import Skill from './Skill';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <Container>
                <div className="main-title">
                    <h2 className="text-center">
                        <Zoom left cascade>
                            My Skills
                        </Zoom>
                    </h2>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="skill-bars">
                            {skills1.map((skill) => (
                                <Skill {...skill} key={skill.id} />
                            ))}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="skill-bars">
                            {skills2.map((skill) => (
                                <Skill {...skill} key={skill.id} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
