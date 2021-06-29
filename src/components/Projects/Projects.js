import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Slide, Zoom } from 'react-reveal';
import {
    fixTechTechnology,
    MobileTechnology,
    realCoolTechnology,
} from '../../data/projects.data';
import './Projects.css';
import fixtech from '../../images/projects/fix_tech.png';
import real_cool from '../../images/projects/realCool.png';
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
                                desc="This is a computer service website. Here the user will be able to make service bookings. Before booking, the user has to log in and the payment system has been done with Stripe. It will be pending when the user has a booking. Admin can change its status, add a new service, and can make someone else the admin. And the user will be able to review the website."
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
                                title="Real Cool"
                                desc="This is an air conditioning Services Website and it is just a static page. It has a few sections with material UI. And it's responsive for medium and mobile devices."
                                useTechnology={realCoolTechnology}
                                sourceCode="https://github.com/hossainrabbi/real-cool"
                                liveSite="https://real-cool.netlify.app/"
                            />
                        </Slide>
                    </Col>
                    <Col md={6}>
                        <Slide right>
                            <div className="project-image">
                                <img src={real_cool} alt="Street Riders" />
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
                                desc="This is a mobile shop app. Some product data is in the Jason file. There are some mobile products on the home page. Clicking on the mobile item will show the details of that item. Clicking on add to cart will store the data in the cart. And redux-persist has been used to store the data in localStorage."
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
