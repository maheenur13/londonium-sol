import { FC, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const Contact: FC = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

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
                        <Form.Control required type='text' placeholder='Your Name' />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom02'>
                        {/* <Form.Label>Last name</Form.Label> */}
                        <Form.Control required type='text' placeholder='Your e-email address' />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom03'>
                        {/* <Form.Label>Last name</Form.Label> */}
                        <Form.Control required type='number' placeholder='Your phone number' />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mb-4' as={Col} md='12' controlId='validationCustom04'>
                        <Form.Control as='textarea' required placeholder='Please write your message' />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type='submit' className='w-100' style={{ borderRadius: '0' }}>
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
