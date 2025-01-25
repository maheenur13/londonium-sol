import useForm from 'hooks/useForm';
import { FC, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { galleryArray, HeaderItemProps } from './constants';

export const MainHeader: FC = () => {
    const [bgImage, setBgImage] = useState<any>(null);
    const [isHoveredIndex, setIsHoveredIndex] = useState<any>(null);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { formData, errors, handleChange, validateForm, setFormData, setErrors } = useForm({
        name: '',
        email: '',
        message: '',
        phone: '',
        category: '',
    });

    const handleClaimClick = () => {
        setIsModalOpen(true);
    };

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

    const handleHoverOnImage = (item: any, index: number) => {
        console.log(item);
        setIsHoveredIndex(index);
        setBgImage(item?.bgImage);
    };
    return (
        <div>
            <Wrapper hoverimage={bgImage} className='wrapper  mx-4'>
                {galleryArray.map((item, idx) => (
                    <ImageWrapper
                        onMouseLeave={() => {
                            setIsHoveredIndex(null);
                            setBgImage(null);
                        }}
                        className={`${item.className} item-${idx} ${isHoveredIndex === idx && item.className !== 'image-view' ? 'active' : 'inactive'
                            }`}
                        onMouseEnter={() => handleHoverOnImage(item, idx)}
                        backImage={item?.image}
                        gridColumn={item.gridColumn}
                        gridRow={item.gridRow}
                        bgColor={'#edf0f2'}
                        key={idx}
                        position={item.position}
                        hoverimage={bgImage}
                    >
                        {!item?.image && !bgImage && item.title}

                        <div className='hover-item'>
                            {item?.bgImage && (
                                <div className=' p-2 d-flex  flex-column justify-content-between text-start h-100  align-items-start'>
                                    <h4>{item?.bgImage && item.title}</h4>
                                    <button onClick={handleClaimClick}>Start Your Claim</button>
                                </div>
                            )}
                        </div>
                        {/* {item.image && <Image style={{
                            objectFit: 'contain'
                        }} src={item.image} fill alt={`image-${item.title}`} />} */}
                    </ImageWrapper>
                ))}
            </Wrapper>
            <Modal show={isModalOpen} size='lg' onHide={() => setIsModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Start your claim</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='formName'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter your email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId='formPhone'>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type='tel'
                                placeholder='Enter your phone number'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                isInvalid={!!errors.phone}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId='formSelect'>
                            <Form.Label>Choose a Department</Form.Label>
                            <Form.Control
                                as='select'
                                name='category'
                                value={formData.category}
                                onChange={handleChange}
                                isInvalid={!!errors.category}
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
                            <Form.Control.Feedback type='invalid'>{errors.category}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId='formMessage'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                placeholder='Your message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                isInvalid={!!errors.message}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>
                        </Form.Group>

                        <div className='text-center'>
                            <Button
                                style={{
                                    width: '200px',
                                    backgroundColor: '#f0f0f0',
                                    border: '1px solid #C3C3C3FF',
                                    color: '#000000',
                                }}
                                className='mt-4'
                                variant='primary'
                                type='submit'
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

const ImageWrapper = styled.div<
    Pick<HeaderItemProps, 'hoverimage' | 'gridColumn' | 'gridRow' | 'bgColor' | 'backImage' | 'position'>
>`
    position: relative;
    overflow: hidden;
    border: 6px solid white;

    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};

    &:before {
        transition: 0.6s;
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url(${({ backImage }) => backImage}) !important;
        background-position: ${({ position }) => position};
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hover-item {
        opacity: 0;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        & button {
            background-color: transparent;
            border: none;
            outline: none;
        }
    }

    &:hover {
        /* transition: opacity 0.6s; */
        .hover-item {
            opacity: 1;

            /* transition: opacity 0.6s; */
        }
    }
`;

const Wrapper = styled.div<{ hoverimage: string }>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(10, 1fr) auto;

    grid-auto-rows: 130px;
    transition: 0.5s;
    background-image: url(${({ hoverimage }) => hoverimage});
    transition: background-size 0.3s ease;
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;

    div {
        display: flex;
        justify-content: flex-start;
        align-items: end;
    }

    .active {
        .hover-item {
            position: relative;
            width: 100%;
            z-index: 99;
            background-color: transparent;
            &:hover {
                :before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #ffffffa8;
                    z-index: -1;
                }
            }
        }
    }

    .inactive {
        padding: 0.625rem;
        &:before {
            background-image: ${({ hoverimage }) => hoverimage && 'none'}!important;
        }

        background-color: ${({ hoverimage }) => (hoverimage ? 'transparent' : 'rgba(225, 225, 225, 0.721)')}!important;
        transition: opacity 0.3s;
    }

    .image-view {
        overflow: hidden;

        &:hover {
            &:before {
                transform: scale(1.1);
            }
            /* transform: scale(1.1);  */
            /* background-size: 120%; */
            /* background-size: 120%; */
            // Scale the element to 110% of its original size
        }
    }
`;
