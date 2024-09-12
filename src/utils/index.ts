export const trackData = async (isInteractive, section, label) => {
    /* @ts-ignore */
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const data = {
        section,
        label,
        action: isInteractive ? 'click' : 'impression',
        isMobile: /android|iphone|ipad|iPod/i.test(userAgent).toString(),
    };

    const url = 'https://script.google.com/macros/s/'+process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID+'/exec';

    try {
        await fetch(url, {
            redirect: "follow",
            method: 'POST',
            mode: "no-cors",
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data).toString(),
        });
    } catch (error) {
        console.error('Error:', error);
    }
};
