import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/Ajit.jpg';

const AboutMe: React.FC = () => {
    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl md:col-span-3 lg:col-span-4'>
            <div className='p-6'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6'>
                    <div className='flex-1 text-center sm:text-left'>
                        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-1'>
                            Overview
                        </h2>
                        <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
                            I work at CarWale, where I have been gaining
                            valuable experience in front-end development. I am
                            proficient in HTML, CSS, JavaScript, React.js, and
                            React Native, and I actively contribute to the
                            development of React and React Native-based UI
                            component libraries. My work involves close
                            collaboration with cross-functional teams to ensure
                            seamless integration and optimal performance of web
                            applications. I am always eager to learn and stay
                            updated with the latest industry trends and
                            technologies, continuously enhancing my skills and
                            knowledge to contribute effectively to my team and
                            projects.
                        </p>
                    </div>
                    <Image
                        src={heroImage}
                        alt="Ajit's profile picture"
                        className='rounded-full shadow-md h-40 w-40 object-cover object-center ring-4 ring-blue-500 dark:ring-blue-400'
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
