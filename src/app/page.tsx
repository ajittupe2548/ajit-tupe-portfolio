import React from 'react';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
// import Languages from '@/components/Languages';
// import Hobbies from '@/components/Hobbies';

const HomePage: React.FC = () => {
    return (
        <>
            <Introduction />
            <About />
            <Skills />
            <Experience />
            <FeaturedProjects />
            <Education />
            <Contact />
        </>
    );
};

export default HomePage;
