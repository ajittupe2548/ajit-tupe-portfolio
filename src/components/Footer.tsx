'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <footer className='border-t text-sm text-center py-6'>
            Designed and Developed by{' '}
            <Link
                target='_blank'
                className='link'
                href='https://www.linkedin.com/in/ajittupe2548/'
            >
                Ajit Tupe.
            </Link>
            <p>
                Built with{' '}
                <Link
                    target='_blank'
                    className='link'
                    href='https://nextui.org/'
                >
                    Next.js
                </Link>{' '}
                &{' '}
                <Link
                    target='_blank'
                    className='link'
                    href='https://tailwindcss.com/'
                >
                    Tailwind
                </Link>{' '}
                Hosted on{' '}
                <Link
                    target='_blank'
                    className='link'
                    href='https://vercel.com/'
                >
                    Vercel.
                </Link>
            </p>
        </footer>
    );
};

export default Navbar;
