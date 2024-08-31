'use client';

import { LuSun, LuMoon } from 'react-icons/lu';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='hover:text-primary'
        >
            <LuSun
                size={22}
                className='absolute rotate-90 scale-0 transition-all dark:rotate-0 animate-none dark:scale-100 sm:hover:animate-rotate'
            />
            <LuMoon
                size={22}
                className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 sm:hover:animate-oscillate sm:dark:hover:animate-none'
            />
        </button>
    );
}
