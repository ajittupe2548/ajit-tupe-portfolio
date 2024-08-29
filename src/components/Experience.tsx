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
            'Automated interactive template creation with a configurable panel, reducing template creation time by 70% and eliminating manual front-end intervention.',
    },
    {
        title: 'Frontend Developer',
        organization: 'CarTrade Tech Limited',
        date: 'April 2022 - March 2024',
        location: 'Mumbai, India · Hybrid',
        description:
            'Introduced the Ozone components system, facilitating multi-platform use of common compound components.',
    },
    {
        title: 'Associate Frontend Developer',
        organization: 'CarTrade Tech Limited',
        date: 'July 2021 - Mar 2022',
        location: 'Mumbai, India · Hybrid',
        description:
            'Actively contributed to the development and maintenance of React and React Native components within the internal Oxygen Library.',
    },
];

const Timeline: React.FC = () => {
    return (
        <div className='pt-16' id='experience'>
            <SubHeading>Experience</SubHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
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
