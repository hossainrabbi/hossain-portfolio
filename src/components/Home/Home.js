import React from 'react';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import NavBar from '../NavBar/NavBar';
import home_image from '../../images/hossain.png';
import './Home.css';

const Home = () => {
    return (
        <header className="home">
            <NavBar />
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
        </header>
    );
};

export default Home;
