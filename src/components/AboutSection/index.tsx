import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { NavItemsEnums } from '../../constants';

const AboutSection = () => {
    return (
        <Wrapper id={NavItemsEnums.ABOUT}>
            <Row style={{ margin: '6rem 2rem', alignItems: 'center' }}>
                <Col sm={5}>
                    <div className='image-wrapper' style={{ position: 'relative', height: '400px' }}>
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
                        solutions. We specialise in a range of legal services, ensuring our clients receive the support
                        and representation they deserve. With a commitment to integrity and excellence, we strive to
                        achieve the best possible outcomes. Your legal matters are our priority—let us guide you every
                        step of the way.
                    </p>
                    <p style={{ color: '#969696', fontSize: '.75rem' }}>Learn about our Team of Experts {'>'}</p>
                </Col>
            </Row>
        </Wrapper>
    );
};

export default AboutSection;

const Wrapper = styled.div`
    .image-wrapper {
        transition: 0.3s;
        &:hover {
            transition: 0.3s;
            box-shadow: 16px 16px 0 rgba(0, 0, 0, 0.784); // Added box shadow on right and bottom
        }
    }
`;
