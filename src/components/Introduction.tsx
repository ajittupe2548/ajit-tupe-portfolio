import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const AboutMe: React.FC = () => {
    return (
        <div className='rounded-xl overflow-hidden transition-all duration-300 md:col-span-3 lg:col-span-4'>
            <div className='p-6'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6'>
                    <div className='flex-1 text-center sm:text-left'>
                        <h1 className='text-3xl font-bold leading-10 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]'>
                            Hello, <br />
                            This is{' '}
                            <span className=' text-pink-500'>AJIT TUPE</span>
                            ,<br />
                            I'm a{' '}
                            <span className=' text-[#16f2b3]'>
                                Frontend Developer
                            </span>
                            .
                        </h1>
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
