import ContactAndMap from '@components/ContactAndMap';
import { MainHeader } from '@components/MainHeader';
import SecondSection from '@components/SecondSection';
import { MainLayout } from '@components/templates/Layouts';

export default function Home() {
    return (
        <MainLayout>
            <MainHeader />
            <SecondSection />
            <div style={{ backgroundColor: '#EDF0F2', padding: '4rem 0' }}>
                <h1 className='text-center m-0'>“ We&apos;re here round the clock ”</h1>
            </div>
            <ContactAndMap />

            {/* <NewHeader /> */}
        </MainLayout>
    );
}
