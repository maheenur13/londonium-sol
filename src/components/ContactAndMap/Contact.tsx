import { FC, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { sendToEmailJs } from 'services/emailService';
import { emailInfo } from 'services/serviceConstants';
import styled from 'styled-components';

// Define a type for the department keys
type DepartmentKey =
    | 'medical_negligence'
    | 'civil_litigation'
    | 'general_enquiries'
    | 'family'
    | 'housing_legal_aid'
    | 'personal_injury'
    | 'mental_health'
    | 'crime'
    | 'commercial_conveyancing'
    | 'employment';

export const Contact: FC = () => {
    const [formElement, setFormElement] = useState<HTMLFormElement | null>();

    const [validated, setValidated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: any) => {
        const form = event.currentTarget;
        console.log({ form });
        setLoading(true);
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
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
            const isSuccess = await sendToEmailJs({
                ...formData,
                dep_email: depEmail,
            });
            if (isSuccess) {
                formElement?.reset();
            }
            setValidated(false);
            // console.log('Form Data:', formData);
        } else {
            setLoading(false);
            setValidated(true);
        }
    };

    return (
        <FormWrapper>
            <div className='my-3'>
                <p className='m-0' style={{ color: '#6D6D6D', fontSize: '1.2rem' }}>
                    Londonium Solicitors
                </p>
                <p className='m-0' style={{ color: '#6D6D6D', fontSize: '1.2rem' }}>
                    Unit 14 -16, 1-13 Adler St, London E1 1EG
                </p>
            </div>
            <Form
                ref={(form: HTMLFormElement | null) => {
                    setFormElement(form);
                }}
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >
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
                        <Form.Control required as='select' name='department'>
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
                <Button
                    disabled={loading}
                    type='submit'
                    className='w-100'
                    style={{ borderRadius: '0', backgroundColor: '#232323', border: '1px solid #d2d2d2' }}
                >
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
