'use client';

import Lottie from 'lottie-react';

const AnimationLottie = ({ animationPath, className }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
    };

    return <Lottie {...defaultOptions} className={className} />;
};

export default AnimationLottie;
