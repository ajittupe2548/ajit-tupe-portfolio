'use client';

import React from 'react';
import studyIcon from '../data/work.json';
import AnimationLottie from './LottieAnimation';
import TimelineItem from './TimelineItem';
import SubHeading from './SubHeading';

const experienceItems: TimelineItem[] = [
    {
        title: 'Software Developer Engineer 2',
        organization: 'CarTrade Tech Limited',
        date: 'April 2024 - Present',
        location: 'Mumbai, India · Hybrid',
        description:
            'Improved performance by 20% by optimizing DOM structure and implementing counter-based hashing for atomic class names. Built developer tools and automations, including a CSS auto-suggestion tool and a pre-commit hook, boosting consistency and speeding up development.',
    },
    {
        title: 'Frontend Developer',
        organization: 'CarTrade Tech Limited',
        date: 'April 2022 - March 2024',
        location: 'Mumbai, India · Hybrid',
        description:
            'Led the React migration of BikeWale’s platform from .NET Razor pages, achieving 60% component reusability and major SEO gains. Boosted user engagement by 75%+ through Core Web Vitals improvements, accessibility enhancements, and performance tuning.',
    },
    {
        title: 'Associate Frontend Developer',
        organization: 'CarTrade Tech Limited',
        date: 'July 2021 - Mar 2022',
        location: 'Mumbai, India · Hybrid',
        description:
            'Developed event-based microsites like Trackday, OffroadDay and WomenInMobility, serving 50k+ daily users.',
    },
];

const Timeline: React.FC = () => {
    return (
        <div className='pt-16' id='experience'>
            <SubHeading className='mb-0 sm:mb-6'>Experience</SubHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-8'>
                <div className='flex'>
                    <AnimationLottie animationPath={studyIcon} className='' />
                </div>
                <div className='flex flex-col gap-6'>
                    {experienceItems.map((item, index) => (
                        <TimelineItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
