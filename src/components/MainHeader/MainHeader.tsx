"use client";
import { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { Modal } from 'react-bootstrap';
import useForm from '../../hooks/useForm'; // Adjust the path as necessary
import { galleryArray } from './constants';
import { ImageWrapper, Wrapper } from './styles';

export const MainHeader: FC = () => {
    const [bgImage, setBgImage] = useState<any>(null);
    const [isHoveredIndex, setIsHoveredIndex] = useState<any>(null);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { formData, errors, handleChange, validateForm, setFormData, setErrors } = useForm({
        name: '',
        email: '',
        message: '',
        phone: '',
        category: ''
    });

    const handleHoverOnImage = (item: any, index: number) => {
        console.log(item);
        setIsHoveredIndex(index);
        setBgImage(item?.bgImage);
    };

    const handleClaimClick = () => {
        setIsModalOpen(true)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log('Form submitted:', formData);
            // Reset form
            setFormData({ name: '', email: '', message: '', phone: '', category: '' });
            setErrors({ name: '', email: '', message: '', phone: '', category: '' });
        }
    };

    return (
        <div>
            <Wrapper
                hoverimage={bgImage}
                className='wrapper px-2 mx-4'
            >
                {galleryArray.map((item, idx) => (
                    <ImageWrapper
                        onMouseLeave={() => {
                            setIsHoveredIndex(null);
                            setBgImage(null);
                        }}
                        onMouseEnter={() => handleHoverOnImage(item, idx)}
                        backImage={item?.image}
                        className={`${item.className} childItem`}
                        key={idx}
                        hoverimage={bgImage}
                    >
                        <p>  {!item?.image && !bgImage && item.title}</p>

                        <div className='hover-item'>
                            {item?.bgImage && (
                                <div className=' p-2 d-flex  flex-column justify-content-between text-start h-100  align-items-start'>
                                    <h1>{item?.bgImage && item.title}</h1>
                                    <button onClick={handleClaimClick}>Start Your Claim</button>
                                </div>
                            )}
                        </div>

                    </ImageWrapper>
                ))}
            </Wrapper>
            <Modal show={isModalOpen} size='lg' onHide={() => setIsModalOpen(false)} >
                <Modal.Header closeButton >
                    <Modal.Title>Start your claim</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                isInvalid={!!errors.phone}
                            />
                            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId="formSelect">
                            <Form.Label>Choose a Department</Form.Label>
                            <Form.Control as="select" name="category" value={formData.category} onChange={handleChange} isInvalid={!!errors.category}>
                                <option value="">Select...</option>
                                <option value="Medical Negligence">Medical Negligence</option>
                                <option value="Civil Litigation">Civil Litigation</option>
                                <option value="Employment">Employment</option>
                                <option value="Family">Family</option>
                                <option value="Housing Legal Aid">Housing Legal Aid</option>
                                <option value="Personal Injury">Personal Injury</option>
                                <option value="Mental Health">Mental Health</option>
                                <option value="Crime">Crime</option>
                                <option value="Commercial Conveyancing">Commercial Conveyancing</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Your message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                isInvalid={!!errors.message}
                            />
                            <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                        </Form.Group>

                        <div className='text-center'>
                            <Button style={{ width: '200px', backgroundColor: "#f0f0f0", border: '1px solid #C3C3C3FF', color: "#000000" }} className='mt-4' variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

