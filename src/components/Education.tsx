import React from 'react';
import AnimationLottie from './LottieAnimation';
import study from '../data/study.json';
import TimelineItem from './TimelineItem';
import SubHeading from './SubHeading';

const educationItems: TimelineItem[] = [
    {
        title: 'BE in Mechanical Engineering',
        organization: 'A. C. Patil College of Engineering, Navi Mumbai',
        date: 'May 2017 - May 2021',
        grade: '8.68 CGPA',
    },
    {
        title: 'Higher Secondary School',
        organization: 'Kisan Veer Mahavidyala, Wai',
        date: 'June 2015 - Mar 2017',
        grade: '72%',
    },
    {
        title: 'Secondary School Certificate',
        organization: 'Mukaidevi Madhyamik Vidyalaya, Washivali',
        date: 'Mar 2004 - Jun 2015',
        grade: '91%',
    },
];

const Timeline: React.FC = () => {
    return (
        <div className='pt-16' id='education'>
            <SubHeading>Education</SubHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-8'>
                <div className='flex flex-col gap-6'>
                    {educationItems.map((item, index) => (
                        <TimelineItem key={index} item={item} />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <AnimationLottie
                        animationPath={study}
                        className='w-full sm:w-2/3'
                    />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
