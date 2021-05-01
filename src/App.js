import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Blogs />
        </>
    );
}

export default App;
