'use client';

import React from 'react';
import studyIcon from '../data/work.json';
import AnimationLottie from './LottieAnimation';

interface TimelineItem {
    title: string;
    organization: string;
    date: string;
    location?: string;
    description?: string;
}

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

const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
    <div className='mb-8 relative'>
        <div className='p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
            <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                {item.title}
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
                {item.organization}
            </p>
            <div className='flex justify-between text-sm text-gray-500 dark:text-gray-500'>
                {item.date}
                {item.location && (
                    <p className='text-sm text-gray-500 dark:text-gray-500'>
                        {item.location}
                    </p>
                )}
            </div>

            {item.description && (
                <p className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
                    {item.description}
                </p>
            )}
        </div>
    </div>
);

const Timeline: React.FC = () => {
    return (
        <div className='max-w-6xl mx-auto p-4 rounded-lg pt-16' id='experience'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                        Experience
                    </h2>
                    {experienceItems.map((item, index) => (
                        <TimelineItem key={index} item={item} />
                    ))}
                </div>
                <div className='flex'>
                    <AnimationLottie animationPath={studyIcon} />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
