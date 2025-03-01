import { Contact } from '@components/ContactAndMap/Contact';
import { useResponsive } from 'hooks';
import { Col, Row } from 'react-bootstrap';
import { NavItemsEnums } from '../../constants';

const ContactUsSection = () => {
    const { isMobile } = useResponsive();
    return (
        <Row
            id={NavItemsEnums.CONTACT}
            style={{ alignItems: 'center', padding: isMobile ? '0 1rem' : '0 3rem', width: '100%', margin: 'auto' }}
        >
            <Col sm={5} style={{ padding: isMobile ? '0 1rem' : '0 4rem' }} data-aos='fade-right'>
                <h1 style={{ marginBottom: '1rem' }}>Contact Us</h1>
                <p style={{ color: '#969696' }}>
                    Fill out the form and submit to send us an email. If you know which department to email, please
                    select the relavent depart- ment to send the email straight to that department.
                </p>
            </Col>
            <Col sm={7} data-aos='fade-left'>
                <Contact />
            </Col>
        </Row>
    );
};

export default ContactUsSection;
