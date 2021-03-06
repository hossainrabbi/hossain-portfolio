import React from 'react';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';
import particleConfig from '../../config/particles.confog';
import { Link } from 'react-scroll';
import home_image from '../../images/hossain.png';
import './Home.css';

const Home = () => {
    return (
        <header className="home" id="home">
            <Particles params={particleConfig} />
            <div className="home-area">
                <Container>
                    <div className="home-content text-center">
                        <img src={home_image} alt="Hossain" />
                        <h1 className="text-center mt-4">I'm Hossain Rabbi</h1>
                        <h3>
                            <Typewriter
                                options={{
                                    strings: [
                                        'A Web Developer..',
                                        'A Front End Developer..',
                                        'A JavaScript Developer..',
                                        'A React Developer..',
                                        'A Programmer..',
                                        'A Learner..',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>
                    </div>
                </Container>
            </div>
            <div className="scroll-down">
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <i></i>
                </Link>
            </div>
        </header>
    );
};

export default Home;
