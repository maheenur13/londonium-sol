import { Contact } from '@components/ContactAndMap/Contact';
import { Col, Row } from 'react-bootstrap';
import { NavItemsEnums } from '../../constants';

const ContactUsSection = () => {
    return (
        <Row id={NavItemsEnums.CONTACT} style={{ alignItems: 'center', padding: '0 3rem' }}>
            <Col sm={5} style={{ padding: '0 4rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>Contact Us</h1>
                <p style={{ color: '#969696' }}>
                    Fill out the form and submit to send us an email. If you know which department to email, please
                    select the relavent depart- ment to send the email straight to that department.
                </p>
            </Col>
            <Col sm={7}>
                <Contact />
            </Col>
        </Row>
    );
};

export default ContactUsSection;
