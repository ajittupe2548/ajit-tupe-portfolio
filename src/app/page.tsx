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
            <div
                className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 pt-16'
                id='about'
            >
                <About />
            </div>

            <div
                className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-4  pt-16'
                id='skills'
            >
                <Skills />
            </div>

            <div
                className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 pt-16'
                id='experience'
            >
                <Experience />
            </div>

            <div
                className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 pt-16'
                id='projects'
            >
                <FeaturedProjects />
            </div>

            <div
                className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6  pt-16'
                id='education'
            >
                <Education />
            </div>

            <div
                className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 py-8'
                id='contact'
            >
                <Contact />
            </div>

            {/* #TODO: Check if we need this */}
            {/* <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className=' rounded-lg overflow-hidden'>
                        <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-12 px-4 sm:px-6 lg:px-8'>
                            <div className='flex flex-col'>
                                <Languages />
                            </div>
                            <div className='flex flex-col'>
                                <Hobbies />
                            </div>
                        </div>
                    </div>
                </div> */}
        </>
    );
};

export default HomePage;
