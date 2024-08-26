'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <footer className='border-t text-sm text-center py-6'>
            © Developed by{' '}
            <Link
                target='_blank'
                className='text-[#16f2b3]'
                href='https://www.linkedin.com/in/ajittupe2548/'
            >
                Ajit Tupe
            </Link>
        </footer>
    );
};

export default Navbar;
