export const trackData = async (isInteractive, section, label) => {
    const data = {
        section,
        label,
        action: isInteractive ? 'click' : 'impression',
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
