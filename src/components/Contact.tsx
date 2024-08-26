'use client';

import React, { useState } from 'react';
import {
    FaEnvelope,
    FaPhoneAlt,
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { TbMailForward } from 'react-icons/tb';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

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
                        className='w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 mb-6'
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
                        className='w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 mb-6'
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
                        className='w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 mb-6'
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
                        className='flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold cursor-pointer disabled:cursor-not-allowed'
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
                        <TbMailForward size={18} />
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
                <div className='mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10 justify-center lg:justify-normal'>
                    <SocialLinks className='' />
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
