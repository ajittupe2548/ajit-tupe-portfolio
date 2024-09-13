export async function POST(request) {
    try {
        const body = await request.json();

        const url = `https://script.google.com/macros/s/${process.env.GOOGLE_SHEET_ID}/exec`;
        const response = await fetch(url, {
            method: 'POST',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(body).toString(),
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response('Internal Server Error', { status: 500 });
    }
}
