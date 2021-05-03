import React, { useEffect, useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timing);
    }, []);

    if (loading) {
        return (
            <div className="loader">
                <HashLoader color="#037fff" loading={loading} size={50} />
            </div>
        );
    }

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
