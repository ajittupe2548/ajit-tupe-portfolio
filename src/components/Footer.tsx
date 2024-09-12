'use client';

import Link from 'next/link';
import React from 'react';
import { trackData } from '@/utils';

const Navbar = () => {
    return (
        <footer className='border-t text-sm text-center py-6'>
            Designed and Developed by{' '}
            <Link
                target='_blank'
                className='link'
                href='https://www.linkedin.com/in/ajittupe2548/'
                onClick={() => trackData(true, 'footer', 'linkedin')}
            >
                Ajit Tupe.
            </Link>
            <p>
                Built with{' '}
                <Link
                    target='_blank'
                    className='link'
                    href='https://nextui.org/'
                    onClick={() => trackData(true, 'footer', 'next')}
                >
                    Next.js
                </Link>{' '}
                &{' '}
                <Link
                    target='_blank'
                    className='link'
                    href='https://tailwindcss.com/'
                    onClick={() => trackData(true, 'footer', 'tailwind')}
                >
                    Tailwind
                </Link>{' '}
                Hosted on{' '}
                <Link
                    target='_blank'
                    className='link'
                    href='https://vercel.com/'
                    onClick={() => trackData(true, 'footer', 'vercel')}
                >
                    Vercel.
                </Link>
            </p>
        </footer>
    );
};

export default Navbar;
