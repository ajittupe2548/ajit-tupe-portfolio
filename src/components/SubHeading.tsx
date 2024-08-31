import React from 'react';

function SubHeading({ children }) {
    return (
        <h2 className='text-3xl font-bold text-center mb-6 text-primary'>
            {children}
        </h2>
    );
}

export default SubHeading;
