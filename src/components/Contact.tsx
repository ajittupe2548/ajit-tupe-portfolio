'use client';

import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
import SocialLinks from './SocialLinks';
import SubHeading from './SubHeading';
import { trackData } from '@/utils';

const ProjectsDisplay: React.FC = () => {
    return (
        <div className='pt-4 sm:pt-16' id='contact'>
            <SubHeading>Get in touch</SubHeading>
            <div className='flex flex-col items-center my-4 text-sm'>
                <p className='text-center'>
                    I'm currently specializing in Front-end Development.
                </p>
                <p className='text-center mt-3 sm:mt-0'>
                    Feel free to get in touch and talk more about your projects.
                </p>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-between'>
                <Link
                    href='mailto:ajittupe2548@gmail.com'
                    className='flex items-center gap-2 mt-2 link'
                    onClick={() => trackData(true, 'contact', 'email')}
                >
                    <FaEnvelope className='w-3 sm:w-4' />
                    <span>ajittupe2548@gmail.com</span>
                </Link>
                <Link
                    href='tel:+919869629631'
                    className='flex items-center gap-2 mt-2 link'
                    onClick={() => trackData(true, 'contact', 'mobile')}
                >
                    <FaPhoneAlt className='w-3 sm:w-4' />
                    <span>+91 9869629631</span>
                </Link>
                <Link
                    href='https://maps.app.goo.gl/fYiGN6BEC4TMcTYn6'
                    target='_blank'
                    className='flex items-center gap-2 mt-2 link'
                    onClick={() => trackData(true, 'contact', 'map')}
                >
                    <FaLocationDot className='w-3 sm:w-4' />
                    <span>Navi Mumbai, Maharashtra, India</span>
                </Link>
            </div>
            <div className='my-8 flex items-center gap-5 justify-center'>
                <SocialLinks className='' section='contact' />
            </div>
        </div>
    );
};

export default ProjectsDisplay;
