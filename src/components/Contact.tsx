'use client';

import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: {
            value: '',
            error: '',
        },
        email: {
            value: '',
            error: '',
        },
        message: {
            value: '',
            error: '',
        },
    });

    const handleInputChange = (e) => {
        const field = e.target.dataset.field;
        setFormData((prev) => ({
            ...prev,
            [field]: {
                error: prev[field].error,
                value: e.target.value,
            },
        }));
    };

    const handleInputBlur = (e) => {
        const field = e.target.dataset.field;
        const value = e.target.value;
        let message = '';
        const regex = {
            name: /^[A-Za-z\s]+$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        };

        if (value.length === 0) {
            message +=
                field.charAt(0).toUpperCase() +
                field.slice(1) +
                ` can't be empty.`;
        } else if (!regex[field].test(value)) {
            message = `Please enter valid ${field}.`;
        }

        setFormData((prev) => ({
            ...prev,
            [field]: {
                value: prev[field].value,
                error: message,
            },
        }));
    };

    const handleBtnClick = () => {
        if (
            formData.name.error ||
            formData.email.error ||
            !formData.name.value ||
            !formData.email.value
        )
            return;
        console.log(
            `*****Output is :  => handleBtnClick => formData:`,
            formData
        );
    };

    return (
        <div className='border p-4 rounded-lg'>
            <div className='mt-6 flex flex-col gap-2'>
                <div className='flex flex-col gap-2 relative'>
                    <label className='text-base' htmlFor='name'>
                        Your Name:{' '}
                    </label>
                    <input
                        className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 mb-6'
                        type='text'
                        value={formData.name.value}
                        maxLength={50}
                        data-field='name'
                        id='name'
                        name='name'
                        required
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                    <span className='absolute bottom-0 text-sm text-red-500'>
                        {formData.name.error}
                    </span>
                </div>
                <div className='flex flex-col gap-2 relative'>
                    <label className='text-base' htmlFor='email'>
                        Your Email:{' '}
                    </label>
                    <input
                        className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 mb-6'
                        type='email'
                        id='email'
                        name='email'
                        data-field='email'
                        maxLength={100}
                        required
                        value={formData.email.value}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                    <span className='absolute bottom-0 text-sm text-red-500'>
                        {formData.email.error}
                    </span>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-base'>Your Message: </label>
                    <textarea
                        className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 mb-6'
                        maxLength={500}
                        name='message'
                        data-field='message'
                        required
                        rows={4}
                        value={formData.message.value}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <button
                        className='flex items-center gap-1 hover:scale-110 disabled:hover:scale-100 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold cursor-pointer disabled:cursor-not-allowed'
                        role='button'
                        onClick={handleBtnClick}
                        disabled={
                            !!formData.name.error ||
                            !!formData.email.error ||
                            !formData.name.value ||
                            !formData.email.value
                        }
                    >
                        <span>Send Message</span>
                        <svg
                            stroke='currentColor'
                            fill='none'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='mt-1'
                            height='18'
                            width='18'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                stroke='none'
                                d='M0 0h24v24H0z'
                                fill='none'
                            ></path>
                            <path d='M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5'></path>
                            <path d='M3 6l9 6l9 -6'></path>
                            <path d='M15 18h6'></path>
                            <path d='M18 15l3 3l-3 3'></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Details = () => {
    return (
        <>
            <div className='lg:w-3/4 '>
                <div className='flex flex-col gap-5 lg:gap-9'>
                    <p className='text-sm md:text-xl flex items-center gap-3'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 24 24'
                            className='bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                            height='36'
                            width='36'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path fill='none' d='M0 0h24v24H0z'></path>
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'></path>
                        </svg>
                        <span>ajittupe2548@gmail.com</span>
                    </p>
                    <p className='text-sm md:text-xl flex items-center gap-3'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            className='bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                            height='36'
                            width='36'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z'></path>
                        </svg>
                        <span>+91 9869629631</span>
                    </p>
                    <p className='text-sm md:text-xl flex items-center gap-3'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 24 24'
                            className='bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                            height='36'
                            width='36'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g id='Location_On'>
                                <g>
                                    <path d='M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z'></path>
                                    <path d='M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z'></path>
                                </g>
                            </g>
                        </svg>
                        <span>Navi Mumbai, Maharashtra, India</span>
                    </p>
                </div>
                <div className='mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10 justify-center lg:justify-normal'>
                    <a target='_blank' href='https://github.com/ajittupe2548'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            className='bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                            height='48'
                            width='48'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z'></path>
                        </svg>
                    </a>
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/in/ajittupe2548/'
                    >
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 24 24'
                            className='bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                            height='48'
                            width='48'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle cx='4.983' cy='5.009' r='2.188'></circle>
                            <path d='M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z'></path>
                        </svg>
                    </a>
                    <a target='_blank' href='https://x.com/ajittupe2548'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            className='bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                            height='48'
                            width='48'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'></path>
                        </svg>
                    </a>
                    <a
                        target='_blank'
                        href='https://www.facebook.com/ajittupe2548/'
                    >
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            className='bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                            height='48'
                            width='48'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'></path>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

const ProjectsDisplay: React.FC = () => {
    return (
        <div className='max-w-6xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow'>
            <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                Contact Me
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <Form />
                </div>
                <div>
                    <Details />
                </div>
            </div>
        </div>
    );
};

export default ProjectsDisplay;
