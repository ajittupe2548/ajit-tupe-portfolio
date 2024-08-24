import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: 'Ajit Tupe',
        default: 'Ajit Tupe',
    },
    description: 'My portfolio (web developer)',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeProvider attribute='class'>
                    <Navbar />
                    <main className='p-4 pb-12 max-w-7xl mx-auto overflow-hidden lg:overflow-visible'>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
