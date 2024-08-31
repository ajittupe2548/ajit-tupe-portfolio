'use client';

import React from 'react';

interface TimelineItem {
    title: string;
    organization: string;
    date: string;
    location?: string;
    grade?: string;
    description?: string;
}

const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
    <div className='relative'>
        <div className='p-4 bg-primary-light rounded-lg shadow-md'>
            <h3 className='text-lg font-medium'>{item.title}</h3>
            <p className='text-sm'>{item.organization}</p>
            <div className='flex justify-between text-sm'>
                {item.location && <p className='text-sm'>{item.location}</p>}
                {item.grade && <p className='text-sm'>{item.grade}</p>}
                {item.date}
            </div>

            {item.description && (
                <p className='mt-2 text-sm'>{item.description}</p>
            )}
        </div>
    </div>
);

export default TimelineItem;
