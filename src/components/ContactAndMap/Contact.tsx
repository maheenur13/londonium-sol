import emailjs from '@emailjs/browser';
import { FC, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';

// const SERVICE_ID = 'contact_service';
// const PUBLIC_KEY = '7m8Nz43ks3yajydpk';
// const TEMPLATE_ID = 'contact_form';

const emailInfo = {
    'medical_negligence': 'medi.neg@londoniumsolicitors.co.uk',
    'civil_litigation': 'civil@londoniumsolicitors.co.uk',
    'general_enquiries': 'info@londoniumsolicitors.co.uk',
    'family': 'family@londoniumsolicitors.co.uk',
    'housing_legal_aid': 'civil@londoniumsolicitors.co.uk',
    'personal_injury': 'pi@londoniumsolicitors.co.uk',
    'mental_health': 'mentalhealth@londoniumsolicitors.co.uk',
    'crime': 'crime@londoniumsolicitors.co.uk',
    'commercial_conveyancing': 'property@londoniumsolicitors.co.uk',
    'employment': 'civil@londoniumsolicitors.co.uk'
}

// Define a type for the department keys
type DepartmentKey = 'medical_negligence' | 'civil_litigation' | 'general_enquiries' | 'family' | 'housing_legal_aid' | 'personal_injury' | 'mental_health' | 'crime' | 'commercial_conveyancing' | 'employment';

export const Contact: FC = () => {

    const [formElement, setFormElement] = useState<HTMLFormElement | null>()

    const [validated, setValidated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);


    const handleSubmit = (event: any) => {
        setLoading(true)
        event.preventDefault();

        const formData: { [key: string]: any } = {}; // Define formData type

        const formElements = event.target.elements;
        Array.from(formElements).forEach((element: any) => {
            if (element.name) {
                formData[element.name] = element.value;
            }
        });

        // Use type assertion for department
        const department = formData['department'] as DepartmentKey;

        // Access emailInfo safely
        const depEmail = emailInfo[department];

        // Send data
        sendToEmailJs({
            ...formData,
            dep_email: depEmail
        });

        console.log('Form Data:', formData);
        setValidated(false);
    };

    const sendToEmailJs = async (data: any) => {
        try {
            const response = await emailjs.send(
                process.env.SERVICE_ID as string,
                process.env.TEMPLATE_ID as string,
                { ...data },
                process.env.PUBLIC_KEY as string,
            );
            if (response.status === 200) {
                toast("Your enquiry submitted!", {
                    type: 'success'
                })
                formElement?.reset()
            }
        } catch (error: any) {
            toast(error, {
                type: 'error',

            })
        } finally {
            setLoading(false);
        }

    }

    return (
        <FormWrapper>

            <ToastContainer />
            <div className='my-3'>
                <p className='m-0' style={{ color: '#6D6D6D', fontSize: '1.2rem' }}>
                    Londonium Solicitors
                </p>
                <p className='m-0' style={{ color: '#6D6D6D', fontSize: '1.2rem' }}>
                    Unit 14 -16, 1-13 Adler St, London E1 1EG
                </p>
            </div>
            <Form ref={(form) => {

                setFormElement(form)

            }} noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='mb-4'>
                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom01'>
                        {/* <Form.Label>First name</Form.Label> */}
                        <Form.Control name='name' required type='text' placeholder='Your Name' />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom02'>
                        {/* <Form.Label>Last name</Form.Label> */}
                        <Form.Control name='reply_to' required type='text' placeholder='Your e-email address' />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom03'>
                        {/* <Form.Label>Last name</Form.Label> */}
                        <Form.Control name='phone' required type='number' placeholder='Your phone number' />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='formSelect'>
                        <Form.Label>Choose a Department</Form.Label>
                        <Form.Control
                            required
                            as='select'
                            name='department'
                        >
                            <option value=''>Select...</option>
                            <option value='general_enquiries'>General Enquiries</option>
                            <option value='medical_negligence'>Medical Negligence</option>
                            <option value='civil_litigation'>Civil Litigation</option>
                            <option value='employment'>Employment</option>
                            <option value='family'>Family</option>
                            <option value='housing_legal_aid'>Housing Legal Aid</option>
                            <option value='personal_injury'>Personal Injury</option>
                            <option value='mental_health'>Mental Health</option>
                            <option value='crime'>Crime</option>
                            <option value='commercial_conveyancing'>Commercial Conveyancing</option>
                        </Form.Control>
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>

                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom04'>
                        <Form.Control name='message' as='textarea' required placeholder='Please write your message' />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                </Row>
                <Button disabled={loading} type='submit' className='w-100' style={{ borderRadius: '0', backgroundColor: "#232323", border: '1px solid #d2d2d2' }}>
                    SUBMIT
                </Button>
            </Form>
        </FormWrapper>
    );
};

const FormWrapper = styled.div`
    padding: 1rem;
    input {
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid #d7d7d7;
        /* border: none; */
    }
`;
