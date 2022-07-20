import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Slide, Zoom } from 'react-reveal';
import {
  fixTechTechnology,
  restCountries,
  restaurantApp,
} from '../../data/projects.data';
import './Projects.css';
import fixtech from '../../images/projects/fix_tech.png';
import restaurant_app from '../../images/projects/restaurant_app.png';
import rest_countries from '../../images/projects/rest_countries.png';
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
                title="Restaurant App"
                desc="This is Food Order Static Website. Here Users can add food to the cart and remove it from the cart, Users can increase and decrease cart quantity up to the stock quantity, Users can remove items from the cart.This data is created using JavaScript objects. Here the product/menu data and menu review data are separate javascript objects. The relationship between the 2 objects is displayed on the same page.
                                "
                useTechnology={restaurantApp}
                sourceCode="https://github.com/hossainrabbi/Restaurant-app"
                liveSite="https://restaurant-app-hr.netlify.app/"
              />
            </Slide>
          </Col>
          <Col md={6}>
            <Slide right>
              <div className="project-image">
                <img src={restaurant_app} alt="restaurant_app" />
              </div>
            </Slide>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <Slide left>
              <div className="project-image">
                <img src={rest_countries} alt="rest_countries" />
              </div>
            </Slide>
          </Col>
          <Col md={6} className="project-details pl-4">
            <Slide right>
              <ProjectDetail
                title="Rest Countries"
                desc="This is a sample static application. Here users can search by country name, users can filter by continent, sort by alphabet, and filter by population range."
                useTechnology={restCountries}
                sourceCode="https://github.com/hossainrabbi/rest_countries"
                liveSite="https://rest-countries-react-api-practice.netlify.app/countries"
              />
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
