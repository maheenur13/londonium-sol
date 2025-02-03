import { MainLayout } from '@components/templates/Layouts';
import type { AppProps } from 'next/app';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../public/scss/app.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}
