import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        <html lang='en' style={{ scrollBehavior: 'smooth' }}>
            <head>
                <link rel='icon' href='/favicon.ico' />
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute='class'>
                    <Navbar />
                    <main className='px-4 md:px-40 max-w-7xl mx-auto overflow-hidden'>
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
