import React from 'react';
import AnimationLottie from './LottieAnimation';
import study from '../data/study.json';

interface TimelineItem {
    title: string;
    school: string;
    date: string;
    grade?: string;
}

const educationItems: TimelineItem[] = [
    {
        title: 'BE in Mechanical Engineering',
        school: 'A. C. Patil College of Engineering, Navi Mumbai',
        date: 'May 2017 - May 2021',
        grade: '8.68 CGPA',
    },
    {
        title: 'Higher Secondary School',
        school: 'Kisan Veer Mahavidyala, Wai',
        date: 'June 2015 - Mar 2017',
        grade: '72%',
    },
    {
        title: 'Secondary School Certificate',
        school: 'Mukaidevi Madhyamik Vidyalaya, Washivali',
        date: 'Mar 2004 - Jun 2015',
        grade: '91%',
    },
];

const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
    <div className='mb-8 relative'>
        <div className='p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
            <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                {item.title}
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
                {item.school}
            </p>

            <div className='flex justify-between items-center mt-2'>
                {item.grade && (
                    <p className='text-sm text-gray-700 dark:text-gray-300'>
                        {item.grade}
                    </p>
                )}
                <p className='text-sm text-gray-500 dark:text-gray-500'>
                    {item.date}
                </p>
            </div>
        </div>
    </div>
);

const Timeline: React.FC = () => {
    return (
        <div className='max-w-6xl mx-auto p-4 rounded-lg pt-16' id='education'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                        Education
                    </h2>
                    {educationItems.map((item, index) => (
                        <TimelineItem key={index} item={item} />
                    ))}
                </div>
                <div className='flex'>
                    <AnimationLottie animationPath={study} />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
