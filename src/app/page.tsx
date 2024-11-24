'use client';

import React, { useEffect } from 'react';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import { trackData } from '@/utils';

const HomePage: React.FC = () => {
    useEffect(() => {
        const url = document.referrer;
        let siteName = 'local';
        if (url) {
            siteName = url.match(/\/\/(?:www\.)?([^:\/]+)/)[1];
        }
        trackData(false, 'page', siteName);
    }, []);

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
