import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    fixTechTechnology,
    FoodsTechnology,
    RidersTechnology,
} from '../../data/projects.data';
import './Projects.css';
import fixtech from '../../images/projects/fix_tech.png';
import street_riders from '../../images/projects/street_riders.png';
import pabna_foods from '../../images/projects/pabna_foods.png';
import ProjectLink from './ProjectLink';

const Projects = () => {
    return (
        <section className="projects mt-5">
            <Container>
                <div className="main-title">
                    <h2 className="text-center">Projects</h2>
                </div>
                <Row className="align-items-center mb-5 pb-5">
                    <Col md={7} className="project-image">
                        <img src={fixtech} alt="FixTech" />
                    </Col>
                    <Col md={5} className="project-details pl-4">
                        <h3>FixTech</h3>
                        <p>
                            A single-page application where people can book
                            services but must pay when booking services. He will
                            be able to see his previous bookings and booking
                            status and people will be able to review them here.
                        </p>
                        <div>
                            {fixTechTechnology.map((technology, index) => (
                                <span className="technology" key={index}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                        <ProjectLink
                            sourceCode="https://github.com/hossainrabbi/fixtech-client"
                            liveSite="https://fixtech-hr.web.app/"
                        />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5 pb-5">
                    <Col md={5} className="project-details pl-4">
                        <h3>Street Riders</h3>
                        <p>
                            A single-page application. People will be able to
                            move the car of their choice from one place to
                            another. There are 4 ways to go by train, car, bike,
                            and bus. A search of his destination will show how
                            much the fare is for how many people.
                        </p>
                        <div>
                            {RidersTechnology.map((technology, index) => (
                                <span className="technology" key={index}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                        <ProjectLink
                            sourceCode="https://github.com/hossainrabbi/street-riders"
                            liveSite="https://street-riders.web.app/"
                        />
                    </Col>
                    <Col md={7} className="project-image">
                        <img src={street_riders} alt="Street Riders" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5 pb-5">
                    <Col md={7} className="project-image">
                        <img src={pabna_foods} alt="Pabna Foods" />
                    </Col>
                    <Col md={5} className="project-details pl-4">
                        <h3>Pabna Foods</h3>
                        <p>
                            A single-page application. Where people can see
                            different food items, If you click on any food, you
                            will be able to see the details of the food and you
                            will be able to search the food by the name of the
                            food.
                        </p>
                        <div>
                            {FoodsTechnology.map((technology, index) => (
                                <span className="technology" key={index}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                        <ProjectLink
                            sourceCode="https://github.com/hossainrabbi/pabna-foods"
                            liveSite="https://pabna-foods.netlify.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
