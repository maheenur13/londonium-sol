import { FC, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Contact: FC = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        // Create an object to hold the form data
        const formData: any = {};

        // Assuming 'form' is a reference to the form element
        const formElements = event.target.elements; // Get all form elements
        console.log({ formElements });

        // Iterate over the form elements and populate the formData object
        Array.from(formElements).forEach((element: any) => {
            console.log({ element });

            if (element.name) { // Ensure the element has a name attribute
                formData[element.name] = element.value; // Set the key-value pair
            }
        });

        console.log('Form Data:', formData); // Log the structured form data
        setValidated(true);
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='mb-4'>
                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom01'>
                        {/* <Form.Label>First name</Form.Label> */}
                        <Form.Control name='user_name' required type='text' placeholder='Your Name' />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom02'>
                        {/* <Form.Label>Last name</Form.Label> */}
                        <Form.Control name='user_email' required type='text' placeholder='Your e-email address' />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom03'>
                        {/* <Form.Label>Last name</Form.Label> */}
                        <Form.Control name='phone_number' required type='number' placeholder='Your phone number' />
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
                            <option value='Medical Negligence'>Medical Negligence</option>
                            <option value='Civil Litigation'>Civil Litigation</option>
                            <option value='Employment'>Employment</option>
                            <option value='Family'>Family</option>
                            <option value='Housing Legal Aid'>Housing Legal Aid</option>
                            <option value='Personal Injury'>Personal Injury</option>
                            <option value='Mental Health'>Mental Health</option>
                            <option value='Crime'>Crime</option>
                            <option value='Commercial Conveyancing'>Commercial Conveyancing</option>
                        </Form.Control>
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>

                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom04'>
                        <Form.Control name='description' as='textarea' required placeholder='Please write your message' />
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                </Row>
                <Button type='submit' className='w-100' style={{ borderRadius: '0', backgroundColor: "#232323", border: '1px solid #d2d2d2' }}>
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
