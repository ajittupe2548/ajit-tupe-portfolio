import React from 'react';
import { Github, Linkedin, Facebook, Twitter } from 'lucide-react';

const AboutMe: React.FC = () => {
    return (
        <div className='rounded-xl overflow-hidden transition-all duration-300 md:col-span-3 lg:col-span-4'>
            <div className='p-6'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6'>
                    <div className='flex-1 text-center sm:text-left'>
                        <h1 className='text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]'>
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
                        <div className='my-12 flex items-center gap-5'>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:scale-125 duration-300'
                                href='https://github.com/Abhishek-Rout'
                            >
                                <Github height={30} width={30} />
                            </a>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:scale-125 duration-300'
                                href='https://www.linkedin.com/in/abhishek-rout-032330192/'
                            >
                                <Linkedin height={30} width={30} />
                            </a>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:scale-125 duration-300'
                                href='https://www.facebook.com/abhishek.rout.1829/'
                            >
                                <Facebook height={30} width={30} />
                            </a>
                            <a
                                target='_blank'
                                className='transition-all text-pink-500 hover:scale-125 duration-300'
                                href='https://x.com/Mr_AbhishekRout'
                            >
                                <svg
                                    stroke='currentColor'
                                    fill='currentColor'
                                    stroke-width='0'
                                    viewBox='0 0 512 512'
                                    height='30'
                                    width='30'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
