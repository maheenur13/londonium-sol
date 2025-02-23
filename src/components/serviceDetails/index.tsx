import ServiceForm from '@components/Includes/ServiceForm';
import { galleryArray } from '@components/MainHeader/constants';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { subServiceDetails } from './data';

type PropsType = {
    serviceName: string;
};

const ServiceDetails: FC<PropsType> = ({ serviceName }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const serviceDetails = galleryArray.find((itm) => itm.slug === serviceName);

    const subServices = subServiceDetails.find((itm) => itm.serviceId === serviceDetails?.id);

    const handleClaimClick = () => {
        setIsModalOpen(true);
    };

    const handleSuccess = () => {
        setIsModalOpen(false);
    };

    return (
        <Container>
            <ContentWrapper>
                <ImageWrapper>
                    <CenterItemsWrapper>
                        <Title>{serviceDetails?.title}</Title>
                        <Button onClick={handleClaimClick} size='sm'>
                            Start Claim Now
                        </Button>
                    </CenterItemsWrapper>

                    <div>
                        {serviceDetails?.bgImage && (
                            <Image
                                src={serviceDetails?.bgImage}
                                fill
                                style={{
                                    objectFit: 'cover',
                                }}
                                alt='bg-image'
                            />
                        )}
                    </div>
                </ImageWrapper>
            </ContentWrapper>
            <ServiceContainer>
                {subServices?.services.map((item: any) => (
                    <Link
                        style={{
                            textDecoration: 'none',
                        }}
                        href={`/services/${serviceName}/${item.slug}`}
                        key={item.title}
                    >
                        <Card
                            // bg={'light'}
                            text={'dark'}
                            style={{
                                width: '100%',
                                height: '100%',
                                overflow: 'hidden',
                                border: 'none',
                                backgroundColor: '#F5F7F7',
                            }}
                            className='mb-2 service-card'
                        >
                            {/* <Card.Header>Header</Card.Header> */}
                            <Card.Body
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <div style={{ textAlign: 'center' }}>
                                    {item?.icon && <item.icon fontSize={60} strokeWidth={1} />}
                                </div>
                                <Card.Title style={{ fontSize: '1rem', textAlign: 'center' }}>
                                    {item?.title
                                        ?.toUpperCase()
                                        .split(' ')
                                        .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join(' ')}
                                </Card.Title>
                                <Card.Text
                                    style={{
                                        textAlign: 'center',
                                        color: '#c3c3c3',
                                        fontSize: '.875rem',
                                        fontWeight: 300,
                                    }}
                                >
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </ServiceContainer>

            <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title
                        style={{ flexGrow: 2, fontSize: '2rem', textTransform: 'uppercase', fontWeight: 700 }}
                        className='text-center'
                    >
                        Start <span style={{ color: 'red' }}>your</span> claim
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ServiceForm handleSuccess={handleSuccess} />
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ServiceDetails;

const Title = styled.h3`
    color: white;
    text-align: center;
    font-size: 4rem;
`;

const ContentWrapper = styled.div`
    width: 100%;
    position: relative;
    height: 20rem;
    /* height: calc(100vh - 10rem); */

    img {
        height: 100%;
        width: 100%;
        z-index: -1;
    }
`;

const ImageWrapper = styled.div`
    height: 100%;
    padding: 10px;
    background-color: #05091779;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterItemsWrapper = styled.div`
    text-align: center;
    button {
        padding: 0.5 2rem;
        background-color: transparent;
        border-radius: 0.125rem;
        border-color: white;
        &:hover {
            background-color: transparent;
            border-color: white;
        }
        &:focus {
            background-color: transparent !important;
            border-color: white;
        }
    }
`;

const ServiceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-auto-rows: 15rem;
    gap: 1rem;
    padding: 2rem 12rem;

    .service-card {
        transition: 0.3s;
        &:hover {
            transition: 0.3s;
            background-color: #0f0f0f !important;
            * {
                color: white;
            }
        }
    }
    svg {
        path {
            stroke-width: 1 !important;
        }
    }

    @media (max-width: 1200px) {
        padding: 2rem 5rem;
        gap: 0.75rem;
    }

    @media (max-width: 768px) {
        padding: 1rem;
        gap: 0.5rem;
    }

    @media (max-width: 480px) {
        padding: 0.5rem;
        gap: 0.25rem;
    }
`;
