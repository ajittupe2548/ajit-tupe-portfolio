import Link from 'next/link';
import React from 'react';
import { FaDownload, FaPhoneAlt } from 'react-icons/fa';
import SocialLinks from './SocialLinks';
import { trackData } from '@/utils';

const Introduction: React.FC = () => {
    return (
        <div className='flex flex-col items-center sm:items-start pt-4'>
            <div className='text-4xl font-bold text-center sm:text-left'>
                <span className='dark:text-link'>Hey there!, I'm</span>
                <br />
                <h1 className='text-8xl md:text-9xl font-extrabold mt-2 block text-center sm:text-left text-primary'>
                    Ajit Tupe.
                </h1>
                <br />
                <p className='text-xl sm:text-3xl'>
                    <span className='text-primary'>Software Engineer.</span>
                    <span className='ml-2'>
                        A self-taught developer with an <br /> interest in
                        Computer Science.
                    </span>
                </p>
                <p className='text-base md:text-xl font-normal mt-8'>
                    🚀 Currently specializing in Frontend <br />⚡ Software
                    Developer Engineer-2 at{' '}
                    <Link
                        href='https://www.carwale.com/'
                        target='_blank'
                        className='link'
                        onClick={() => trackData(true, 'intro', 'carwale')}
                    >
                        Carwale
                    </Link>
                </p>
            </div>
            <SocialLinks className='my-12' section='intro' />
            <div className='flex items-center gap-3'>
                <Link
                    className='filledBtn px-3 text-xs md:px-8 py-3 md:py-4 rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-2'
                    href='#contact'
                    onClick={() => trackData(true, 'intro', 'contact')}
                >
                    <span>Contact me</span>
                    <FaPhoneAlt size={12} />
                </Link>
                <Link
                    className='unfilledBtn flex items-center gap-2 rounded-full btnShadow px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm uppercase tracking-wider text-primary md:font-semibold'
                    role='button'
                    target='_blank'
                    href='https://drive.google.com/file/d/1TSZoJmUD2afHxbw8c96jKGSpp_Brdhlh/view?usp=sharing'
                    onClick={() => trackData(true, 'intro', 'resume')}
                >
                    <span>Get Resume</span>
                    <FaDownload size={12} />
                </Link>
            </div>
        </div>
    );
};

export default Introduction;
