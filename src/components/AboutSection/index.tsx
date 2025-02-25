import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

const AboutSection = () => {
    return (
        <Row style={{ margin: '6rem 2rem', alignItems: 'center' }}>
            <Col sm={5}>
                <div style={{ position: 'relative', height: '400px' }}>
                    <Image
                        src={'/images/legal-consult.jpg'}
                        alt='about-image'
                        fill
                        style={{
                            objectFit: 'cover',
                            position: 'absolute',
                        }}
                    />
                </div>
            </Col>
            <Col sm={7} style={{ padding: '0 2rem' }}>
                <h1>About Us</h1>
                <p style={{ color: '#969696' }}>
                    Londonium Solicitors is a trusted legal firm dedicated to providing expert advice and tailored
                    solutions. We specialise in a range of legal services, ensuring our clients receive the support and
                    representation they deserve. With a commitment to integrity and excellence, we strive to achieve the
                    best possible outcomes. Your legal matters are our priority—let us guide you every step of the way.
                </p>
                <p style={{ color: '#969696', fontSize: '.75rem' }}>Learn about our Team of Experts {'>'}</p>
            </Col>
        </Row>
    );
};

export default AboutSection;
