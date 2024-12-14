import type { AppProps } from 'next/app';
import '../../public/scss/app.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
