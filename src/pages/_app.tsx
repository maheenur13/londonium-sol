import { MainLayout } from '@components/templates/Layouts';
import type { AppProps } from 'next/app';
import '../../public/scss/app.scss';



export default function App({ Component, pageProps }: AppProps) {

    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )

}
