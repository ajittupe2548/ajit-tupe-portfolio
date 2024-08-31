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
                background: 'var(--background)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                tertiary: 'var(--tertiary)',
                card: 'var(--card)',
                pill: 'var(--pill)',
                link: 'var(--link)',
                brand: 'var(--brand)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            animation: {
                rotate: 'rotate 5s linear infinite',
                oscillate: 'oscillate 3s linear infinite',
            },
            keyframes: {
                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                oscillate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(40deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
            },
        },
    },
};
