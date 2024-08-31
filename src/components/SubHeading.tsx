import React from 'react';

function SubHeading({ children, className = 'mb-6' }) {
    return (
        <h2
            className={`text-3xl font-bold text-center text-primary ${className}`}
        >
            {children}
        </h2>
    );
}

export default SubHeading;
