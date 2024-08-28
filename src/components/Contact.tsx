'use client';

import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const ProjectsDisplay: React.FC = () => {
    return (
        <div className='max-w-6xl mx-auto p-4  rounded-lg shadow'>
            <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center'>
                Get in touch
            </h2>
            <div className='flex flex-col items-center gap-5'>
                <Link
                    href='mailto:ajittupe2548@gmail.com'
                    className='text-sm md:text-xl flex items-center gap-2 md:gap-3'
                >
                    <FaEnvelope className='w-3 sm:w-4' />
                    <span>ajittupe2548@gmail.com</span>
                </Link>
                <Link
                    href='tel:+919869629631'
                    className='text-sm md:text-xl flex items-center gap-2 md:gap-3'
                >
                    <FaPhoneAlt className='w-3 sm:w-4' />
                    <span>+91 9869629631</span>
                </Link>
                <Link
                    href='https://maps.app.goo.gl/fYiGN6BEC4TMcTYn6'
                    target='_blank'
                    className='text-sm md:text-xl flex items-center gap-2 md:gap-3'
                >
                    <FaLocationDot className='w-3 sm:w-4' />
                    <span>Navi Mumbai, Maharashtra, India</span>
                </Link>
            </div>
            <div className='mt-8 flex items-center gap-5 justify-center'>
                <SocialLinks className='' />
            </div>
        </div>
    );
};

export default ProjectsDisplay;
