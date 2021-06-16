import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Slide, Zoom } from 'react-reveal';
import {
    fixTechTechnology,
    MobileTechnology,
    RidersTechnology,
} from '../../data/projects.data';
import './Projects.css';
import fixtech from '../../images/projects/fix_tech.png';
import street_riders from '../../images/projects/street_riders.png';
import mobile_ghor from '../../images/projects/mobile_ghor.png';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <Container>
                <div className="main-title">
                    <h2 className="text-center">
                        <Zoom top cascade>
                            My Projects
                        </Zoom>
                    </h2>
                </div>
                <Row className="align-items-center mb-5 pb-5">
                    <Col md={6}>
                        <Slide left>
                            <div className="project-image">
                                <img src={fixtech} alt="FixTech" />
                            </div>
                        </Slide>
                    </Col>
                    <Col md={6} className="project-details pl-4">
                        <Slide right>
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
                        </Slide>
                    </Col>
                </Row>

                <Row className="align-items-center flex-column-reverse flex-md-row mb-5 pb-5">
                    <Col md={6} className="project-details pl-4">
                        <Slide left>
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
                        </Slide>
                    </Col>
                    <Col md={6}>
                        <Slide right>
                            <div className="project-image">
                                <img src={street_riders} alt="Street Riders" />
                            </div>
                        </Slide>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col md={6}>
                        <Slide left>
                            <div className="project-image">
                                <img src={mobile_ghor} alt="Mobile Ghor" />
                            </div>
                        </Slide>
                    </Col>
                    <Col md={6} className="project-details pl-4">
                        <Slide right>
                            <ProjectDetail
                                title="Mobile Ghor"
                                desc="A single-page Online Mobile Shop application. Where people can see different mobile items If users click on any mobile, users will be able to see the mobile details. Users can add products to the cart. Users can remove added data from the cart."
                                useTechnology={MobileTechnology}
                                sourceCode="https://github.com/hossainrabbi/mobile-ghor"
                                liveSite="https://mobile-ghor.netlify.app/"
                            />
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
