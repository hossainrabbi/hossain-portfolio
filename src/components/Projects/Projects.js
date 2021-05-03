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
import ProjectDetail from './ProjectDetail';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <Container>
                <div className="main-title">
                    <h2 className="text-center">My Projects</h2>
                </div>
                <Row className="align-items-center mb-5 pb-5">
                    <Col md={6}>
                        <div className="project-image">
                            <img src={fixtech} alt="FixTech" />
                        </div>
                    </Col>
                    <Col md={6} className="project-details pl-4">
                        <ProjectDetail
                            title="FixTech"
                            desc="A single-page Computer Services application where people can book
                            services but must pay when booking services. He will
                            be able to see his previous bookings and booking
                            status and people will be able to review them here."
                            useTechnology={fixTechTechnology}
                            sourceCode="https://github.com/hossainrabbi/fixtech-client"
                            liveSite="https://fixtech-hr.web.app/"
                        />
                    </Col>
                </Row>

                <Row className="align-items-center flex-column-reverse flex-md-row mb-5 pb-5">
                    <Col md={6} className="project-details pl-4">
                        <ProjectDetail
                            title="Street Riders"
                            desc="A single-page Riders Sharing application. People will be able to
                            move the car of their choice from one place to
                            another. There are 4 ways to go by train, car, bike,
                            and bus. A search of his destination will show how
                            much the fare is for how many people."
                            useTechnology={RidersTechnology}
                            sourceCode="https://github.com/hossainrabbi/street-riders"
                            liveSite="https://street-riders.web.app/"
                        />
                    </Col>
                    <Col md={6}>
                        <div className="project-image">
                            <img src={street_riders} alt="Street Riders" />
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="project-image">
                            <img src={pabna_foods} alt="Pabna Foods" />
                        </div>
                    </Col>
                    <Col md={6} className="project-details pl-4">
                        <ProjectDetail
                            title="Pabna Foods"
                            desc="A single-page Online Food Delivery application. Where people can see
                            different food items, If you click on any food, you
                            will be able to see the details of the food and you
                            will be able to search the food by the name of the
                            food."
                            useTechnology={FoodsTechnology}
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
