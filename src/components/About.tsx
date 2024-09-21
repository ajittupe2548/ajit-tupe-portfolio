import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/AjitImage.jpg';
import SubHeading from './SubHeading';

const About: React.FC = () => {
    return (
        <div className='pt-16' id='about'>
            <SubHeading>Overview</SubHeading>
            <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
                <div className='flex-1 text-center sm:text-left mb-4 leading-relaxed'>
                    <p>
                        Greetings! I'm Ajit Tupe, a dedicated software engineer
                        located in Navi Mumbai, India. My expertise spans HTML,
                        CSS, JavaScript, TypeScript, React.js, and React Native,
                        encompassing frontend development.
                    </p>
                    <p className='mt-4'>
                        Currently I'm a UI Developer @ CarWale where I have been
                        gaining valuable experience in front-end development.
                    </p>
                    <p className='mt-4'>
                        I am always eager to learn and stay updated with the
                        latest industry trends and technologies, continuously
                        enhancing my skills and knowledge.
                    </p>
                </div>
                <Image
                    src={heroImage}
                    alt="Ajit's profile picture"
                    className='rounded-full shadow-md h-64 w-64 object-cover object-center'
                />
            </div>
        </div>
    );
};

export default About;
