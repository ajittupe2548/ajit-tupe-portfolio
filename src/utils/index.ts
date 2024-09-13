export const trackData = async (isInteractive, section, label) => {
    /* @ts-ignore */
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const data = {
        section,
        label,
        action: isInteractive ? 'click' : 'impression',
        isMobile: /android|iphone|ipad|iPod/i.test(userAgent).toString(),
    };

    try {
        await fetch('/api/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error:', error);
    }
};
