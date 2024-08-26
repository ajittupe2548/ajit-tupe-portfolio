import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SOCIAL_LINKS = [
    { name: 'GitHub', href: 'https://github.com/ajittupe2548', icon: FaGithub },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ajittupe2548/',
        icon: FaLinkedin,
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/ajittupe2548/',
        icon: FaFacebook,
    },
    { name: 'Twitter', href: 'https://x.com/ajittupe2548', icon: FaXTwitter },
];

function SocialLinks({ className }) {
    return (
        <div
            className={`flex items-center gap-5 justify-center sm:justify-start ${className}`}
        >
            {SOCIAL_LINKS.map((item, index) => (
                <Link
                    target='_blank'
                    className='transition-all text-pink-500 hover:text-pink-200 duration-300'
                    href={item.href}
                    key={index}
                >
                    <item.icon size={30} />
                </Link>
            ))}
        </div>
    );
}

export default SocialLinks;
