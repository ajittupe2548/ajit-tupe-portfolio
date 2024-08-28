import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/Ajit.jpg';

const About: React.FC = () => {
    return (
        <div className='rounded-xl overflow-hidden transition-all duration-300 md:col-span-3 lg:col-span-4 p-6'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-1'>
                Overview
            </h2>
            <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
                <div className='flex-1 text-center sm:text-left'>
                    <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
                        I'm Mumbai Based Frontend Developer with experience in
                        React JS, JavaScript , TypeScript , React native , HTML
                        , CSS add SCSS. Currently I work at CarWale, where I
                        have been gaining valuable experience in front-end
                        development. I am always eager to learn and stay updated
                        with the latest industry trends and technologies,
                        continuously enhancing my skills and knowledge to
                        contribute effectively to my team and projects.
                    </p>
                </div>
                <Image
                    src={heroImage}
                    alt="Ajit's profile picture"
                    className='rounded-full shadow-md h-60 w-60 object-cover object-center ring-4 ring-blue-500 dark:ring-blue-400'
                />
            </div>
        </div>
    );
};

export default About;
