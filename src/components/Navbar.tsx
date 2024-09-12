'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaRegUser,
    FaLayerGroup,
    FaPhoneAlt,
    FaBriefcase,
    FaTools,
    FaBars,
} from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { trackData } from '@/utils';

import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const navLinks = [
    { name: 'About', href: '/#about', icon: FaRegUser },
    { name: 'Skills', href: '/#skills', icon: FaTools },
    { name: 'Experience', href: '/#experience', icon: FaBriefcase },
    { name: 'Projects', href: '/#projects', icon: FaLayerGroup },
    { name: 'Contact', href: '/#contact', icon: FaPhoneAlt },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMobileNavlinkClick = (name) => {
        trackData(true, 'navbar', name);
        setIsOpen(false);
    };

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
        trackData(true, 'navbar', !isOpen ? 'hamburger' : 'close');
    }

    return (
        <header className='sticky top-0 z-50 backdrop-blur-md shadow-sm dark:shadow-md'>
            <nav className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <Link href='/' className='text-2xl font-bold' onClick={() => trackData(true, 'navbar', 'logo')}>
                            <Logo />
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className='relative px-3 py-2 rounded-md text-sm font-medium   group flex items-center hover:text-primary'
                                    onClick={() => trackData(true, 'navbar', link.name.toLowerCase())}
                                >
                                    <link.icon size={16} className='mr-2' />
                                    {link.name}
                                    <motion.span
                                        className='absolute bottom-0 left-0 w-full h-0.5  transform scale-x-0 group-hover:scale-x-100 '
                                        layoutId='underline'
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center md:ml-6'>
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className='flex -mr-2 md:hidden'>
                        <div className='flex items-center px-5'>
                            <ThemeToggle />
                        </div>
                        <button
                            onClick={handleHamburgerClick}
                            className='inline-flex items-center justify-center p-2 rounded-md focus:outline-none hover:text-primary'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {!isOpen ? (
                                <FaBars size={22} />
                            ) : (
                                <FaXmark size={22} />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <motion.div
                    className='md:hidden backdrop-blur-md bg-opacity-70 over:text-primary'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className='px-3 py-2 rounded-md text-base font-medium flex items-center hover:text-primary'
                                onClick={() => handleMobileNavlinkClick(link.name.toLowerCase())}
                            >
                                <link.icon size={16} className='mr-2' />
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;
