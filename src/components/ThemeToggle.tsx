'use client';

import { LuSun, LuMoon } from 'react-icons/lu';
import { useTheme } from 'next-themes';
import { trackData } from '@/utils';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const handleThemeClick = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        trackData(true, 'navbar', newTheme);
    }

    return (
        <button
            onClick={handleThemeClick}
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
