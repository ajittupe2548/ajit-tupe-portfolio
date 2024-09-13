export async function POST(request) {
    try {
        const formData = await request.formData();

        // Convert the formData object to URLSearchParams
        const body = new URLSearchParams();
        for (const pair of formData.entries()) {
            body.append(pair[0], pair[1]);
        }

        const url = `https://script.google.com/macros/s/${process.env.GOOGLE_SHEET_ID}/exec`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body.toString(),
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
