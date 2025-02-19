import useForm from 'hooks/useForm';
import { FC, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { sendToEmailJs } from 'services/emailService';
import { emailInfo } from 'services/serviceConstants';
import styled from 'styled-components';

type PropsType = {
    handleSuccess?: () => void;
};

const ServiceForm: FC<PropsType> = ({ handleSuccess }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const { formData, errors, handleChange, validateForm, setFormData, setErrors } = useForm({
        name: '',
        email: '',
        message: '',
        phone: '',
        department: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        setLoading(true);
        e.preventDefault();
        if (validateForm()) {
            console.log({ formData });
            const { email, ...restData } = formData;

            const depEmail = emailInfo[restData.department as keyof typeof emailInfo];

            const newFormData = {
                ...restData,
                reply_to: email,
            };

            const isSuccess = await sendToEmailJs({
                ...newFormData,
                dep_email: depEmail,
            });

            if (isSuccess && handleSuccess) {
                handleSuccess();
            }
        }
        setLoading(false);
    };

    return (
        <Wrapper>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId='formName'>
                    {/* <Form.Label>Name</Form.Label> */}
                    <Form.Control
                        type='text'
                        placeholder='your name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-3' controlId='formEmail'>
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control
                        type='email'
                        placeholder='your email address'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-3' controlId='formPhone'>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                    <Form.Control
                        type='tel'
                        placeholder='your phone number'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-3' controlId='formSelect'>
                    {/* <Form.Label>Choose a Department</Form.Label> */}
                    <Form.Control
                        as='select'
                        name='department'
                        value={formData.department}
                        onChange={handleChange}
                        isInvalid={!!errors.department}
                    >
                        <option value=''>select relevant department</option>
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
                    <Form.Control.Feedback type='invalid'>{errors.department}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-3' controlId='formMessage'>
                    {/* <Form.Label>Message</Form.Label> */}
                    <Form.Control
                        className='text-area'
                        as='textarea'
                        rows={3}
                        placeholder='please write your message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>
                </Form.Group>

                <div className='text-center'>
                    <Button
                        disabled={loading}
                        style={{
                            width: '200px',
                            backgroundColor: '#000000',
                            border: 'none',
                            color: '#ffffff',
                            borderRadius: 0,
                        }}
                        className='mt-4'
                        variant='primary'
                        type='submit'
                    >
                        {loading ? (
                            <>
                                <Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true' />{' '}
                                loading
                            </>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default ServiceForm;

const Wrapper = styled.div`
    .form-control {
        border: none !important;
        border-bottom: 1px solid #ced4da !important;
        border-radius: 0;
        &:focus {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            border-bottom: 1px solid #ced4da !important;
        }
    }

    .text-area {
        border: 1px solid #ced4da !important;
        &:focus {
            border: 1px solid #ced4da !important;
        }
    }

    /* input {
        border: none;
        border-bottom: 1px solid #ced4da;
    } */
`;
