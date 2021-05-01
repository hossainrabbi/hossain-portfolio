import React from 'react';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import home_image from '../../images/hossain.png';
import './Home.css';
import Particles from 'react-particles-js';
import particleConfig from '../../config/particles.confog';

const Home = () => {
    return (
        <header className="home">
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
                <a href="#about">
                    <i></i>
                </a>
            </div>
        </header>
    );
};

export default Home;
