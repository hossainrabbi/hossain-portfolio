import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, animateScroll } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <Navbar
            className={navbar ? 'nav-bar active-nav pt-2' : 'nav-bar pt-3'}
            expand="lg"
            fixed="top"
        >
            <Container>
                <Navbar.Brand
                    href="#"
                    onClick={() => animateScroll.scrollToTop()}
                >
                    Hossain
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link
                            to="home"
                            className="nav-link"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            className="nav-link"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About
                        </Link>
                        <Link
                            to="skills"
                            className="nav-link"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Skills
                        </Link>
                        <Link
                            to="projects"
                            className="nav-link"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Projects
                        </Link>
                        <Link
                            to="blog"
                            className="nav-link"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Blog
                        </Link>
                        <Link
                            to="contact"
                            className="nav-link"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
