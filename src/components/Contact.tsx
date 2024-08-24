import React from 'react';

const ProjectsDisplay: React.FC = () => {
    return (
        <div className='rounded-lg shadow-md md:col-span-2 lg:col-span-3'>
            <div className='p-4'>
                <h2 className='text-xl font-bold'>Contact Me</h2>
            </div>
            <div className='grid gap-4 p-4 sm:grid-cols-2'>
                <div>Form</div>
                <div>Details</div>
            </div>
        </div>
    );
};

export default ProjectsDisplay;
