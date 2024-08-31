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
    <div className='p-4 bg-card rounded-lg hoverScale'>
        <h3 className='text-lg font-medium text-primary'>{item.title}</h3>
        <p className='text-sm text-tertiary mt-1'>{item.organization}</p>
        <div className='flex justify-between text-sm text-tertiary mt-1'>
            {item.location && <p className='text-sm'>{item.location}</p>}
            {item.grade && <p className='text-sm'>{item.grade}</p>}
            {item.date}
        </div>

        {item.description && <p className='mt-2 text-sm'>{item.description}</p>}
    </div>
);

export default TimelineItem;
