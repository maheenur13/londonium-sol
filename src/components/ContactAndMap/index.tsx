import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Contact } from './Contact';


import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
    ssr: false
})

const ContactAndMap: FC = () => {
    return (
        <Container>
            <Row className='g-2'>
                <Col md={6}>
                    <Contact />
                </Col>
                <Col md={6} >
                    <Map />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactAndMap;
