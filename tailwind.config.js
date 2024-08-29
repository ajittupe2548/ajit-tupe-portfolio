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
                primary: {
                    light: 'hsl(var(--primary-light))',
                    DEFAULT: 'hsl(var(--primary))',
                    dark: 'hsl(var(--primary-dark))',
                },
                secondary: {
                    light: 'var(--secondary-light)',
                    DEFAULT: 'var(--secondary)',
                    dark: 'var(--secondary-dark)',
                },
                tertiary: {
                    light: 'hsl(var(--tertiary-light))',
                    DEFAULT: 'hsl(var(--tertiary))',
                    dark: 'hsl(var(--tertiary-dark))',
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
    primary: black,
    secondary: pink,
    tertiary: green,
}
*/
