export async function POST(request) {
    if (process.env.SCRIPT_DEPLOYMENT_ID) {
        try {
            const formData = await request.json();

            const url = `https://script.google.com/macros/s/${process.env.SCRIPT_DEPLOYMENT_ID}/exec`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
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
    else {
        return new Response('Ok', { status: 200 })
    }
}
