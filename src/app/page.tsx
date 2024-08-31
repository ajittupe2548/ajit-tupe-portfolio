'use client';

import React, { useEffect } from 'react';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const HomePage: React.FC = () => {
    useEffect(() => {});
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
