import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { trackData } from '@/utils';

const SOCIAL_LINKS = [
    { name: 'GitHub', href: 'https://github.com/ajittupe2548', icon: FaGithub },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ajittupe2548/',
        icon: FaLinkedin,
    },
    // {
    //     name: 'Facebook',
    //     href: 'https://www.facebook.com/ajit.tupe.547/',
    //     icon: FaFacebook,
    // },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/ajittupe2548/',
        icon: FaInstagram,
    },
    // {
    //     name: 'Twitter',
    //     href: 'https://x.com/ajittupe2548',
    //     icon: FaXTwitter,
    // },
];

function SocialLinks({ className, section }) {
    return (
        <div
            className={`flex items-center gap-5 justify-center sm:justify-start ${className}`}
        >
            {SOCIAL_LINKS.map((item, index) => (
                <Link
                    target='_blank'
                    className='transition-all duration-300 hover:text-primary'
                    href={item.href}
                    key={index}
                    onClick={() =>
                        trackData(true, section, item.name.toLowerCase())
                    }
                >
                    <item.icon size={30} />
                </Link>
            ))}
        </div>
    );
}

export default SocialLinks;
