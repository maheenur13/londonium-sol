import ServiceForm from '@components/Includes/ServiceForm';
import { galleryArray } from '@components/MainHeader/constants';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
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
        <div>
            <ContentWrapper>
                <ImageWrapper>
                    <CenterItemsWrapper>
                        <Title>{serviceDetails?.title}</Title>
                        <Button
                            onClick={handleClaimClick}
                            style={{ background: '#161616', border: '1px solid #636363' }}
                            size='lg'
                        >
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
                {subServices?.services.map((item) => (
                    <Link
                        style={{
                            textDecoration: 'none',
                        }}
                        href={`/services/${serviceName}/${item.slug}`}
                        key={item.title}
                    >
                        <Card
                            bg={'light'}
                            text={'dark'}
                            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                            className='mb-2'
                        >
                            {/* <Card.Header>Header</Card.Header> */}
                            <Card.Body>
                                <Card.Title>
                                    {item?.title
                                        ?.toLowerCase()
                                        .split(' ')
                                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join(' ')}
                                </Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </ServiceContainer>

            <Modal show={isModalOpen} size='lg' onHide={() => setIsModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Start your claim</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ServiceForm handleSuccess={handleSuccess} />
                </Modal.Body>
            </Modal>
        </div>
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
    height: calc(100vh - 10rem);

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
        /* border-radius: 0.125rem; */
        padding: 1rem 3rem;
        border-radius: 20rem;
        margin-top: 2rem;
        font-weight: 600;
    }
    /* margin: auto; */
    /* align-self: center; */
`;

const ServiceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-auto-rows: 12rem;
    gap: 1rem;
    padding: 2rem 12rem;

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
