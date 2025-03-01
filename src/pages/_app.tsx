import { MainLayout } from '@components/templates/Layouts';

import type { AppProps } from 'next/app';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../public/scss/app.scss';

import { Roboto } from 'next/font/google';
import { AOSProvider } from '../providers';

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={roboto.className}>
            <AOSProvider>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </AOSProvider>
        </main>
    );
}
