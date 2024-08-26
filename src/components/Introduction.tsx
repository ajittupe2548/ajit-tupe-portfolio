import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const AboutMe: React.FC = () => {
    return (
        <div className='rounded-xl overflow-hidden transition-all duration-300 md:col-span-3 lg:col-span-4'>
            <div className='p-6'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6'>
                    <div className='flex-1 text-left'>
                        <div className='text-4xl font-bold'>
                            <span className='text-[#16f2b3]'>
                                Hey there!, I'm-
                            </span>
                            <br />
                            <h1 className='text-8xl md:text-9xl font-extrabold mt-2 block text-center sm:text-left'>
                                Ajit Tupe.
                            </h1>
                            <br />
                            <p className='text-xl sm:text-3xl'>
                                Software Engineer.
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
                                    className='text-[#16f2b3]'
                                >
                                    Carwale
                                </Link>
                            </p>
                        </div>
                        <div className='my-12 flex items-center gap-5 justify-center sm:justify-start'>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:scale-125 duration-300'
                                href='https://github.com/ajittupe2548'
                            >
                                <FaGithub size={30} />
                            </a>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:scale-125 duration-300'
                                href='https://www.linkedin.com/in/ajittupe2548/'
                            >
                                <FaLinkedin size={30} />
                            </a>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:scale-125 duration-300'
                                href='https://www.facebook.com/ajittupe2548/'
                            >
                                <FaFacebook size={30} />
                            </a>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:scale-125 duration-300'
                                href='https://x.com/ajittupe2548'
                            >
                                <FaXTwitter size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
