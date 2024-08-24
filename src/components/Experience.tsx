import React from 'react';

interface TimelineItem {
    type: 'education' | 'experience';
    title: string;
    organization: string;
    date: string;
    location?: string;
    description?: string;
    skills?: string[];
}

const educationItems: TimelineItem[] = [
    {
        type: 'education',
        title: 'BE in Mechanical Engineerings',
        organization: 'A. C. Patil College of Engineering',
        date: 'May 2017 - May 2021',
        skills: ['HTML', 'JavaScript', 'CSS', 'MySQL', 'React'],
    },
    {
        type: 'education',
        title: 'Higher Secondary School',
        organization: 'Kisan Veer Mahavidyala',
        date: 'June 2015 - Mar 2017',
        description: 'Higher secondary schooling with IT subject',
        skills: ['HTML', 'JavaScript', 'CSS', 'MySQL'],
    },
    {
        type: 'education',
        title: 'Secondary School',
        organization: 'Mukaidevi Madhyamik Vidyalaya',
        date: 'Mar 2012 - Jun 2015',
    },
    {
        type: 'education',
        title: 'Primary School',
        organization: 'Z. P. Primary School',
        date: 'Mar 2004 - Jun 2012',
    },
];

const experienceItems: TimelineItem[] = [
    {
        type: 'experience',
        title: 'SDE2',
        organization: 'Carwale',
        date: 'April 2024 - Present · 3 mos',
        location: 'Mumbai, India · Hybrid',
        skills: ['HTML', 'JavaScript', 'CSS', 'MySQL'],
    },
    {
        type: 'experience',
        title: 'SDE2',
        organization: 'Carwale',
        date: 'April 2022 - March 2024 · 2 yrs',
        location: 'Mumbai, India · Hybrid',
        skills: ['HTML', 'JavaScript', 'CSS', 'MySQL'],
    },
    {
        type: 'experience',
        title: 'Associate Frontend Developer',
        organization: 'Carwale',
        date: 'July 2021 - Mar 2022 · 9 mos',
        location: 'Mumbai, India · Hybrid',
        description: 'Assisted in developing and testing web applications.',
        skills: ['HTML', 'JavaScript', 'CSS', 'MySQL'],
    },
];

const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
    <div className='mb-8 relative'>
        <div className='absolute top-0 left-0 w-2 h-full bg-gray-200 dark:bg-gray-700' />
        <div className='ml-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
            <div className='absolute left-0 top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800' />
            <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                {item.title}
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
                {item.organization}
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-500'>
                {item.date}
            </p>
            {item.location && (
                <p className='text-sm text-gray-500 dark:text-gray-500'>
                    {item.location}
                </p>
            )}
            {item.description && (
                <p className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
                    {item.description}
                </p>
            )}
            {item.skills && (
                <div className='mt-2 flex flex-wrap gap-2'>
                    {item.skills.map((skill, index) => (
                        <span
                            key={index}
                            className='px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </div>
);

const Timeline: React.FC = () => {
    return (
        <div className='max-w-6xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                        Experience
                    </h2>
                    {experienceItems.map((item, index) => (
                        <TimelineItem key={index} item={item} />
                    ))}
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                        Education
                    </h2>
                    {educationItems.map((item, index) => (
                        <TimelineItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
