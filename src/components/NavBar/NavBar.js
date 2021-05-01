import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link, animateScroll as scroll } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
    // const scrollToTop = () => {
    //     scroll.scrollToTop();
    // };

    return (
        <Navbar className="nav-bar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Hossain</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#about">Works</Nav.Link>
                        <Nav.Link href="#about">Blog</Nav.Link>
                        <Nav.Link href="#about">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
