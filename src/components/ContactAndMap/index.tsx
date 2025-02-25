import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Icon, { calender, mapPinFull } from '@libs/icons';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Map = dynamic(() => import('./Map'), {
    ssr: false,
});

const ContactAndMap: FC = () => {
    return (
        <Container>
            <Row className='g-2 p-5' style={{ alignItems: 'center' }}>
                <Col md={6}>
                    <div style={{ height: '32rem' }}>
                        <Map />
                    </div>
                </Col>
                <Col md={6}>
                    <div className='my-4 px-4'>
                        <p className='m-0' style={{ color: '#7D7D7C', fontSize: '1.75rem', fontWeight: 500 }}>
                            Londonium Solicitors
                        </p>
                        <p
                            className='m-0 mt-3'
                            style={{ color: '#7D7D7C', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}
                        >
                            <Icon fill='#7D7D7C' path={mapPinFull} />

                            <span style={{ marginLeft: '0.5rem' }}>Unit 14 -16, 1-13 Adler St, London E1 1EG</span>
                        </p>
                        <p
                            className='m-0 mt-2'
                            style={{ color: '#7D7D7C', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}
                        >
                            <Icon fill='#7D7D7C' path={calender} />{' '}
                            <span style={{ marginLeft: '0.5rem' }}>Open Monday to Friday</span>
                        </p>
                        <p
                            className='m-0 mt-2'
                            style={{ color: '#7D7D7C', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}
                        >
                            <Image src='/svg/clock-solid.svg' width={18} height={18} alt='icon' />
                            <span style={{ marginLeft: '0.5rem' }}>Time: 10am - 5pm</span>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactAndMap;
