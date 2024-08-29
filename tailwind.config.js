/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,jsx,ts,tsx,mdx}',
        './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                primary1: {
                    front: 'hsl(var(--primary1-front))',
                    back: 'hsl(var(--primary1-back))',
                },
                secondary1: {
                    front: 'hsl(var(--secondary1-front))',
                    back: 'hsl(var(--secondary1-back))',
                },
                tertiary1: {
                    front: 'hsl(var(--tertiary1-front))',
                    back: 'hsl(var(--tertiary1-back))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
};

/*
light {
    primary1: black,
    primary2: gray,
    primary3: lightGray,
    secondary1: pink,
    tertiary1: green,
}
*/
