import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
