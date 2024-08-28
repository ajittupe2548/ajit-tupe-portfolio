'use client';

import Lottie from 'lottie-react';

const AnimationLottie = ({ animationPath }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
            width: '100%',
        },
    };

    return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
