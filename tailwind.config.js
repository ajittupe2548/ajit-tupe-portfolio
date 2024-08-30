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
                primary: {
                    lightest: 'var(--primary-lightest)',
                    light: 'var(--primary-light)',
                    DEFAULT: 'var(--primary)',
                    dark: 'var(--primary-dark)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                },
                tertiary: {
                    DEFAULT: 'var(--tertiary)',
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
