import React from 'react';
import AboutMe from '@/components/AboutMe';
import Technologies from '@/components/Technologies';
import FeaturedProjects from '@/components/FeaturedProjects';
import Timeline from '@/components/Timeline';
import Languages from '@/components/Languages';
import Hobbies from '@/components/Hobbies';

const HomePage: React.FC = () => {
    return (
        <div className='min-h-screen p-4 md:p-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6'>
                    <AboutMe />
                </div>

                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <Technologies />
                </div>

                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6'>
                    <FeaturedProjects />
                </div>

                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6'>
                    <Timeline />
                </div>

                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
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
                </div>
            </div>
        </div>
    );
};

export default HomePage;
