'use client';

import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <FaSun
                size={24}
                className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
            />
            <FaMoon
                size={24}
                className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            />
        </button>
    );
}
