import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SkillBars } from 'react-skills';
import { skills1, skills2 } from '../../data/skills.data';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <Container>
                <div className="main-title">
                    <h2 className="text-center">My Skills</h2>
                </div>
                <Row>
                    <Col md={6} className="custom-skill-bar">
                        <SkillBars flat={true} skills={skills1} />
                    </Col>
                    <Col md={6} className="custom-skill-bar">
                        <SkillBars flat={true} skills={skills2} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
