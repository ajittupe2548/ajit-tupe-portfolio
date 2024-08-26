import Link from 'next/link';
import React from 'react';
import {
    FaLinkedin,
    FaGithub,
    FaFacebook,
    FaDownload,
    FaPhoneAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const AboutMe: React.FC = () => {
    return (
        <div className='rounded-xl overflow-hidden transition-all duration-300 md:col-span-3 lg:col-span-4'>
            <div className='p-6'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6'>
                    <div className='flex-1 text-left'>
                        <div className='text-4xl font-bold'>
                            <span className=''>Hey there!, I'm</span>
                            <br />
                            <h1 className='text-8xl md:text-9xl font-extrabold mt-2 block text-center sm:text-left text-pink-500'>
                                Ajit Tupe.
                            </h1>
                            <br />
                            <p className='text-xl sm:text-3xl'>
                                <span className='text-emerald-400'>
                                    Software Engineer.
                                </span>
                                <span className='text-gray-500 ml-2'>
                                    A self-taught developer with an <br />{' '}
                                    interest in Computer Science.
                                </span>
                            </p>
                            <p className='text-base md:text-xl font-normal mt-8 text-gray-400'>
                                🚀 Currently specializing in Frontend <br />⚡
                                Frontend Engineer at{' '}
                                <Link
                                    href='https://www.carwale.com/'
                                    target='_blank'
                                    className='text-emerald-400'
                                >
                                    Carwale
                                </Link>
                            </p>
                        </div>
                        <div className='my-12 flex items-center gap-5 justify-center sm:justify-start'>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:text-pink-200 duration-300'
                                href='https://github.com/ajittupe2548'
                            >
                                <FaGithub size={30} />
                            </a>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:text-pink-200 duration-300'
                                href='https://www.linkedin.com/in/ajittupe2548/'
                            >
                                <FaLinkedin size={30} />
                            </a>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:text-pink-200 duration-300'
                                href='https://www.facebook.com/ajittupe2548/'
                            >
                                <FaFacebook size={30} />
                            </a>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:text-pink-200 duration-300'
                                href='https://x.com/ajittupe2548'
                            >
                                <FaXTwitter size={30} />
                            </a>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Link
                                className='bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-1000'
                                href='#contact'
                            >
                                <button className='px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-2'>
                                    <span>Contact me</span>
                                    <FaPhoneAlt size={12} />
                                </button>
                            </Link>
                            <Link
                                className='flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm uppercase tracking-wider text-white md:font-semibold'
                                role='button'
                                target='_blank'
                                href='https://drive.google.com/file/d/1AE5hnwbQSJ9TM1MVVi7E9GyK39HPrhOq/view?usp=sharing'
                            >
                                <span>Get Resume</span>
                                <FaDownload size={12} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
