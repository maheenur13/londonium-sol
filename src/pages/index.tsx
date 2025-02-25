import AboutSection from '@components/AboutSection';
import ContactAndMap from '@components/ContactAndMap';
import ContactUsSection from '@components/ContactUsSection';
import InfoSlider from '@components/InfoSlider';
import { MainHeader } from '@components/MainHeader';
import SecondSection from '@components/SecondSection';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
    return (
        <Fragment>
            <Container>
                <MainHeader />
                <InfoSlider />
                <SecondSection />
                <AboutSection />
                {/* <div style={{ backgroundColor: '#EDF0F2', padding: '4rem 0' }}>
                    <h1 className='text-center m-0'>“ We&apos;re here round the clock ”</h1>
                </div> */}
                <ContactUsSection />
                <ContactAndMap />
            </Container>
        </Fragment>
    );
}
