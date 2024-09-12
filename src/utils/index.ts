export const trackData = async (isInteractive, section, label) => {
    /* @ts-ignore */
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const data = {
        section,
        label,
        action: isInteractive ? 'click' : 'impression',
        isMobile: /android|iphone|ipad|iPod/i.test(userAgent).toString(),
    };

    const queryString = new URLSearchParams(data).toString();

    const url = `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID}/exec?${queryString}`;

    try {
        await fetch(url, {
            method: 'POST',
        });
    } catch (error) {
        console.error('Error:', error);
    }
};
